import { useEffect, useState } from 'react';
import style from './styles/ServicePopUp.module.scss';
import Image from 'next/image';

import callIcon from '../public/images/icons/buttons/call.svg';

import servicesJson from '../public/json/services.json';

export default function ServicePopUp({children, setPopUp, number, extended, setScrollTo, setScrollChanged}){

    const scroll = (where)=>{
        setScrollTo(where)
        setScrollChanged(prev=>prev+=1)
        setPopUp(prev=>({...prev, open: false}))
    }

    const [animate, setAnimate] = useState(false)
    const [fontP, setFontP] = useState(17)


    useEffect(()=>{
        setAnimate(true)
        if(window.innerWidth<481&&extended){
            setFontP(17)
        }else if(window.innerWidth<481&&!extended){
            setFontP(20)
        }else if(window.innerWidth>=481&&extended){
            setFontP(28)
        }else if(window.innerWidth>=481&&!extended){
            setFontP(35)
        }
    }, [])

    return(
        <div className={style.popUp}>
            <h3>{servicesJson[number].title}</h3>
            <article style={extended?{height: '30%'}:{height: '60%'}}>
                <Image className={style.icon} src={servicesJson[number].icon} alt='glassImg' width={30} height={30}/>
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

            <button onClick={()=>scroll('CONTACT')}>
                <Image src={callIcon} alt='callImg' />
                <span>Skontaktuj się z nami</span>
            </button>

            <div className={animate?`${style.close} ${style.animate}`:style.close} onClick={()=>setPopUp(prev=>({...prev, open: false}))}>
                <div></div>
            </div>
        </div>
    )
}