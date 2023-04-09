import style from './styles/Services.module.scss';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { variantFive, variantFour, variantOne, variantSix, variantThree, variantTwo } from './AnimationVariants';


import circleArrowIcon from '../public/images/icons/buttons/circleArrow.svg';

import ServicePopUp from './ServicePopUp';

import servicesJson from '../public/json/services.json';
import ButtonAnimation from './ButtonAnimation';

export default function Services({children, setComponentsHeihgt, setScrollTo, setScrollChanged, resized}){

    const servicesRef = useRef(null)
    const controlTop = useAnimation();
    const controlBottom = useAnimation();
    const [ topVisible, setTopVisible ] = useState(false)
    const [ bottomVisible, setBottomVisible ] = useState(false)

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

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setTopVisible(entry.isIntersecting)
        })
        observer.observe(topSliderContainerRef.current)
    }, [])
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setBottomVisible(entry.isIntersecting)
        })
        observer.observe(bottomSliderContainerRef.current)
    }, [])

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, services: servicesRef.current.offsetHeight}))
    }, [resized])

    const [popUp, setPopUp] = useState({open: false, number: 0})
    
    const topSliderContainerRef = useRef(null);
    const bottomSliderContainerRef = useRef(null);

    const sliderWidth = {
        containerPadding: 20,
        marginElement: 5,
        element: 300,
    }

    const all = sliderWidth.element*3+sliderWidth.marginElement*6+sliderWidth.containerPadding*2

    useEffect(()=>{
        topSliderContainerRef.current.scrollTo({
            left: (all-window.innerWidth)/2,
            behavior: "smooth",
        });
        bottomSliderContainerRef.current.scrollTo({
            left: (all-window.innerWidth)/2,
            behavior: "smooth",
          });
    }, [])

    const openPopUp = (number)=>{
        setPopUp(prev=>({...prev, open: true, number: number}))
    }

    const service = (serviceNumber)=>{
        return(
            <div className={style.service}>
                <Image className={style.icon} src={servicesJson[serviceNumber].icon} alt='glassImg' width={30} height={30}/>
                <h4>{servicesJson[serviceNumber].title}</h4>
                <p>{servicesJson[serviceNumber].shortDescription}</p>
                <ButtonAnimation onClick={()=>openPopUp(serviceNumber)}> 
                    <span>Więcej</span>
                    <Image src={circleArrowIcon} alt='arrowIcon' width={30} height={30}/>
                </ButtonAnimation>
            </div>
        )
    }
    
    return(
        <div className={style.services} ref={servicesRef}>
            <h3 className={style.title}>Oferta</h3>
            <motion.div 
            className={style.topSliderContainer} 
            ref={topSliderContainerRef}
            variants={variantFive}
            animate={controlTop}
            >
                {service(2)}
                {service(0)}
                {service(3)}
            </motion.div>
            <motion.div 
            className={style.bottomSliderContainer} 
            ref={bottomSliderContainerRef}
            variants={variantThree}
            animate={controlBottom}
            >
                {service(4)}
                {service(1)}
                {service(5)}
            </motion.div>
            <AnimatePresence
            mode={'wait'}
            initial={false}
            onExitComplete={()=>null}
            >
                {popUp.open && <ServicePopUp setPopUp={setPopUp} number={popUp.number} extended={popUp.number==0} setScrollTo={setScrollTo} setScrollChanged={setScrollChanged} />}
            </AnimatePresence>
        </div>
    )
}