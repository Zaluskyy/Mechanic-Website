import style from './styles/Footer.module.scss'

import {CopyToClipboard} from 'react-copy-to-clipboard'

import Image from 'next/image';

import copyIcon from '../public/images/icons/copy.svg';
import { useState } from 'react';
// import { useRef } from 'react';

export default function Footer({children, setScrollTo}){

    const [ copied, setCopied ] = useState(false)

    const scroll = (where)=>{
        setScrollTo(where)
    }
    return(
        <footer className={style.footer}>
            <section className={style.name}>
                <h4>Tadeusz Załuski</h4>
                <p>Warsztat samochodowy działający w Lubaczowie już 29 lat. </p>
                <h3><span className={style.red}>Napisz</span> do nas</h3>
                <div className={style.copyEmail}>
                    <div className={style.email}>
                        danuta_zaluska@wp.pl
                    </div>
                    <CopyToClipboard text={"danuta_zaluska@wp.pl"} onCopy={()=>setCopied(true)}>
                        <div className={style.copy} style={copied?{backgroundColor: '#F13C3C'}:{}}>
                            <Image alt='copyIcon' src={copyIcon}/>
                        </div>
                    </CopyToClipboard>
                </div>
            </section>

            <section className={style.contact}>
                <h4>Kontakt</h4>
                <div className={style.address}>
                    <span>Adres</span>
                    <span>ul. Piaskowa 8A Lubaczów</span>
                </div>
                <div className={style.contacts}>
                    <span>Dane Kontaktowe</span>
                    <span>Telefon: 605 606 343</span>
                    <span>Email: danuta_zaluska@gmail.com</span>
                </div>
            </section>
            
            <section className={style.menu}>
                <h4>Menu</h4>
                <ul>
                    <li onClick={()=>scroll('HOME')}  className={style.active}>Strona główna</li>
                    <li onClick={()=>scroll('ABOUT')} >O nas</li>
                    <li onClick={()=>scroll('SERVICES')} >Usługi</li>
                    <li onClick={()=>scroll('GALLERY')} >Galeria</li>
                    <li onClick={()=>scroll('CONTACT')} >Kontakt</li>
                </ul>
            </section>
        </footer>
    )
}