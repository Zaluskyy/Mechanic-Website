import style from './styles/About.module.scss';
import downIcon from '../public/images/icons/buttons/down.svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { variantOne, variantTwo, variantThree, variantFour, variantFive, variantSix } from './AnimationVariants';
import ButtonAnimation from './ButtonAnimation';

export default function About({children, setComponentsHeihgt, setScrollTo, setScrollChanged}){

    const controlTop = useAnimation();
    const controlBottom = useAnimation();
    
    const { ref: topRef, inView: topVisible } = useInView();
    const { ref: bottomRef, inView: bottomVisible } = useInView();

    useEffect(()=>{
        controlTop.start("hidden")
        controlBottom.start("hidden")
    }, [])
    useEffect(()=>{
        topVisible && controlTop.start("visible")
    }, [topVisible])
    useEffect(()=>{
        bottomVisible && controlBottom.start("visible")
    }, [bottomVisible])

    // console.log(topVisible);
    
    
    
    const aboutRef = useRef(null)

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, about: aboutRef.current.offsetHeight}))
    }, [])

    const scroll =(where)=>{
        setScrollTo(where)
        setScrollChanged(prev=>prev+=1)
    }
    return(
        <div className={style.about} ref={aboutRef}>
            <ul className={style.top} >
                <motion.li
                ref={topRef}
                variants={variantOne}
                animate={controlTop}

                >29 LAT DOŚWIADCZENIA</motion.li>
                <motion.li
                variants={variantTwo}
                animate={controlTop}
                >SETKI ZADOWOLONYCH KLIENTÓW</motion.li>
                <motion.li
                variants={variantThree}
                animate={controlTop}
                >NAJWYŻSZA JAKOŚĆ USŁUG</motion.li>
            </ul>
            <div className={style.bottom} >
                <motion.h3
                ref={bottomRef}
                variants={variantFour}
                animate={controlBottom}
                >O nas</motion.h3>
                <motion.p
                variants={variantFive}
                animate={controlBottom}
                >
                Firma Handlowo-Usługowa „Mechanika Pojazdowa” jest warsztatem samochodowym świadczącym usługi blacharsko-lakiernicze od 1994 r. Filarem naszej firmy jest doświadczenie i wiedza zdobywana na przestrzeni lat. W naszym warsztacie używamy profesjonalnego sprzętu i wysokiej jakości materiałów lakierniczych. Świadczymy fachowe doradztwo a wszelkie naprawy konsultujemy na bieżąco z naszymi klientami.
                </motion.p>
                <ButtonAnimation onClick={()=>scroll('GALLERY')}
                variants={variantSix}
                animate={controlBottom}
                >
                    <Image alt='downIcon' src={downIcon}/>
                    <span>Zobacz galerię</span>
                </ButtonAnimation>
            </div>
        </div>
    )
}