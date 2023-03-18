import React, {useState} from 'react';
import style from './styles/Nav.module.scss';
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import hamburger from '../public/images/icons/hamburger.svg'
import x from '../public/images/icons/x.svg'
import callIcon from '../public/images/icons/call.svg';

export default function Nav({children}){

    const [openNav, setOpenNav] = useState(false)

    return(
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image alt='logo' src={logo}/>
                <h4>Mechanik</h4>
            </div>
            {/* <Image 
            src={openNav?x:hamburger} 
            alt='hamburger' 
            className={style.hamburger}
            onClick={()=>setOpenNav(prev=>!prev)}
            /> */}
            <div 
            className={openNav?`${style.hamburgerContainer} ${style.activeX}`: style.hamburgerContainer}
            onClick={()=>setOpenNav(prev=>!prev)}
            >
                <div className={style.hamburger}></div>
            </div>
            <ul className={openNav?style.activeNav:''}>
                <li className={style.activeLi}>Strona główna</li>
                <li>O nas</li>
                <li>Usługi</li>
                <li>Galeria</li>
                <li>Kontakt</li>

                {/* <div className={style.additionNav}>                 */}
                    <li className={style.line}></li>
                    <li className={style.title}>Działamy już od 29 lat</li>
                    <p>Firma Handlowo-Usługowa „Mechanika Pojazdowa” jest warsztatem samochodowym świadczącym usługi blacharsko-lakiernicze od 1994 r.</p>
                    <button className={style.contactBtn}>
                    <Image src={callIcon} alt='callIcon'/>
                    <span>Skontaktuj się z nami</span>
                    </button>
                {/* </div> */}
            </ul>
        </nav>
    )
}