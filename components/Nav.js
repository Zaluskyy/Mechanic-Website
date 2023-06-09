import React, {useEffect, useRef, useState} from 'react';
import style from './styles/Nav.module.scss';
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import callIcon from '../public/images/icons/buttons/call.svg';
import ButtonAnimation from '../UI/ButtonAnimation';

export default function Nav({children, setComponentsHeihgt, setScrollTo, setScrollChanged}){

    const navRef = useRef(null)

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, nav: navRef.current.offsetHeight}))
    }, [])

    const [openNav, setOpenNav] = useState(false)


    const handleResize = ()=>{
        if(window.innerWidth>=620){
            setOpenNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    useEffect(()=>{
        openNav?document.body.style.overflow = 'hidden': document.body.style.overflow = 'auto';
    }, [openNav])

    const scroll = (where)=>{
        setOpenNav(false)
        setScrollTo(where)
        setScrollChanged(prev=>prev+=1)
    }

    return(
        <nav className={style.nav} ref={navRef}>
            <div className={style.logo}>
                <Image alt='logo' src={logo}/>
                <h4>Mechanik</h4>
            </div>
            <div 
            className={openNav?`${style.hamburgerContainer} ${style.activeX}`: style.hamburgerContainer}
            onClick={()=>setOpenNav(prev=>!prev)}
            >
                <div className={style.hamburger}></div>
            </div>
            <ul className={openNav?style.activeNav:''}>
                <li 
                onClick={()=>scroll('HOME')} 
                onKeyPress={()=>scroll('HOME')} 
                className={style.activeLi}
                tabIndex="1"
                >Strona główna</li>
                <li 
                onClick={()=>scroll('ABOUT')}
                onKeyPress={()=>scroll('ABOUT')}
                tabIndex="2"
                >O nas</li>
                <li 
                onClick={()=>scroll('SERVICES')}
                onKeyPress={()=>scroll('SERVICES')}
                tabIndex="3"
                >Usługi</li>
                <li 
                onClick={()=>scroll('GALLERY')}
                onKeyPress={()=>scroll('GALLERY')}
                tabIndex="4"
                >Galeria</li>
                <li 
                onClick={()=>scroll('CONTACT')}
                onKeyPress={()=>scroll('CONTACT')}
                tabIndex="5"
                >Kontakt</li>

                    <li className={style.line}></li>
                    <li className={style.title}>Działamy już od 29 lat</li>
                    <p>Firma Handlowo-Usługowa „Mechanika Pojazdowa” jest warsztatem samochodowym świadczącym usługi blacharsko-lakiernicze od 1994 r.</p>
                    <ButtonAnimation onClick={()=>scroll('CONTACT')} className={style.contactBtn}>
                    <Image src={callIcon} alt='callIcon'/>
                    <span>Skontaktuj się z nami</span>
                    </ButtonAnimation>
            </ul>
        </nav>
    )
}