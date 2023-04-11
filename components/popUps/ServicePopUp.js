import { useEffect, useState } from 'react';
import style from './ServicePopUp.module.scss';
import Image from 'next/image';

import { motion } from 'framer-motion';

import callIcon from '../../public/images/icons/buttons/call.svg';
import servicesJson from '../../public/json/services.json';
import { dropIn, exitAnimation, openPopUp, variantOne } from '../../UI/AnimationVariants';
import ButtonAnimation from '../../UI/ButtonAnimation';

export default function ServicePopUp({children, setPopUp, number, extended, setScrollTo, setScrollChanged}){

    const scroll = (where)=>{
        setScrollTo(where)
        setScrollChanged(prev=>prev+=1)
        setPopUp(prev=>({...prev, open: false}))
    }

    const [fontP, setFontP] = useState(17)

    useEffect(()=>{
        if(window.innerWidth<481&&extended){
            setFontP(15)
        }else if(window.innerWidth<481&&!extended){
            setFontP(20)
        }else if(window.innerWidth>=481&&extended){
            setFontP(25)
        }else if(window.innerWidth>=481&&!extended){
            setFontP(25)
        }
    }, [])

    const handleKeyDown = (e)=>{
        if(e.key == 'Escape') setPopUp(prev=>({...prev, open: false}))
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
        }
    })

    return(
        <motion.div 
        className={style.popUp}

        variants={openPopUp}
        initial="hidden"
        animate="visible"
        exit="exit"

        >
            <h3>{servicesJson[number].title}</h3>
            <article style={extended?{height: '30%'}:{height: '60%'}}>
                <Image className={style.icon} src={servicesJson[number].icon} alt={servicesJson[number].alt} width={30} height={30}/>
                <p style={{fontSize: fontP}}
                >{servicesJson[number].LongDescription}</p>
            </article>
            
            {extended?(
                <ul className={style.extended}>
                    <li>
                        <h4>{servicesJson[number].extended.title[0]}</h4>
                        <p>{servicesJson[number].extended.description[0]}</p>
                    </li>
                    <li>
                        <h4>{servicesJson[number].extended.title[1]}</h4>
                        <p>{servicesJson[number].extended.description[1]}</p>
                    </li>
                </ul>
            ):''}

            <ButtonAnimation 
            onClick={()=>scroll('CONTACT')}
            onKeyPress={()=>scroll('CONTACT')}
            
            >
                <Image src={callIcon} alt='callImg' />
                <span>Skontaktuj się z nami</span>
            </ButtonAnimation>

            <motion.div 
            className={style.close} 
            onClick={()=>setPopUp(prev=>({...prev, open: false}))}
            variants={exitAnimation}
            initial="hidden"
            animate="visible"
            whileHover={{
                scale: 1.5,
                backgroundColor: "#F13C3C",
            }}

            >
                <div></div>
            </motion.div>
        </motion.div>
    )
}