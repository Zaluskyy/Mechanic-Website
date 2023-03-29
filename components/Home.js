import style from './styles/Home.module.scss'
import Image from 'next/image';
import backgroundImage from '../public/images/background.jpg';
import callIcon from '../public/images/icons/buttons/call.svg';
import downIcon from '../public/images/icons/buttons/down.svg';
import { useEffect, useRef } from 'react';

export default function Home({children, setComponentsHeihgt, setScrollTo}){

    const homeRef = useRef(null)

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, home: homeRef.current.offsetHeight}))
    }, [])

    const scroll = (where)=>{
        setScrollTo(where)
    }

    return(
        <div className={style.home} ref={homeRef}>
            <Image className={style.bgImage} alt='Auto' src={backgroundImage} priority/>
            <div className={style.overlay}></div>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h1>Naprawa aut powypadkowych</h1>
                    <h2>Usługi blacharsko-lakiernicze w Lubaczowie</h2>
                </div>
                <div className={style.buttonsContainer}>
                    <button onClick={()=>scroll('CONTACT')} className={style.contactBtn}>
                        <Image alt='callIcon' src={callIcon}/>
                        <span>Skontaktuj się z nami</span>
                    </button>
                    <button onClick={()=>scroll('SERVICES')} className={style.offerBtn}>
                        <Image alt='downIcon' src={downIcon}/>
                        <span>Zobacz ofertę</span>
                    </button>
                </div>
            </div>
        </div>
    )
}