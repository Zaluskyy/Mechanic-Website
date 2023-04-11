import style from './styles/Footer.module.scss'

import {CopyToClipboard} from 'react-copy-to-clipboard'

import Image from 'next/image';

import downArrow from '../public/images/icons/downArrow.svg'

import copyIcon from '../public/images/icons/copy.svg';
import { useState } from 'react';

export default function Footer({children, setScrollTo, setScrollChanged}){

    const [ copied, setCopied ] = useState(false)
    const [ tagsHidden, setTagsHidden ] = useState(true)

    const scroll = (where)=>{
        setScrollTo(where)
        setScrollChanged(prev=>prev+=1)
    }
    return(
        <>
        <footer className={style.footer}>
            <section className={style.name}>
                <h4>Tadeusz Załuski</h4>
                <p>Warsztat samochodowy działający w Lubaczowie już od 29 lat. </p>
                <h3><span className={style.red}>Napisz</span> do nas</h3>
                <div className={style.copyEmail}>
                    <div className={style.email}>
                        danuta_zaluska@wp.pl
                    </div>
                    <CopyToClipboard text={"danuta_zaluska@wp.pl"} onCopy={()=>setCopied(true)}>
                        <button className={style.copy} style={copied?{backgroundColor: '#F13C3C'}:{}}>
                            <Image alt='Ikonka kopiowania' src={copyIcon}/>
                        </button>
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
                    <span>Email: danuta_zaluska@wp.pl</span>
                </div>
            </section>
            
            <section className={style.menu}>
                <h4>Menu</h4>
                <ul>
                    <li 
                    onClick={()=>scroll('HOME')}  
                    onKeyPress={()=>scroll('HOME')}
                    tabIndex="0"
                    >Strona główna</li>
                    <li 
                    onClick={()=>scroll('ABOUT')} 
                    onKeyPress={()=>scroll('ABOUT')} 
                    tabIndex="0"
                    >O nas</li>
                    <li 
                    onClick={()=>scroll('SERVICES')} 
                    onKeyPress={()=>scroll('SERVICES')} 
                    tabIndex="0"
                    >Usługi</li>
                    <li 
                    onClick={()=>scroll('GALLERY')} 
                    onKeyPress={()=>scroll('GALLERY')} 
                    tabIndex="0"
                    >Galeria</li>
                    <li 
                    onClick={()=>scroll('CONTACT')} 
                    onKeyPress={()=>scroll('CONTACT')}
                    tabIndex="0"
                    >Kontakt</li>
                </ul>
            </section>
        </footer>
        <div className={style.madeBy} style={tagsHidden?{overflow: 'hidden'}:{overflow: 'visible'}}>
            <div className={style.tags}>
                <div className={style.icon} onClick={()=>setTagsHidden(prev=>!prev)}>
                    <Image src={downArrow} alt='Zobacz tagi' className={tagsHidden?'':style.animation}/>
                </div>
                <h6>Tagi:</h6>
                <ul>
                    <div>blacharz</div>
                    <div>blacharka</div>
                    <div>blacharnictwo</div>
                    <div>naprawa</div>
                    <div>mechanik</div>
                    <div>mechanika</div>
                    <div>lakiernik</div>
                    <div>lakiernictwo</div>
                    <div>warsztat</div>
                    <div>Załuski</div>
                    <div>Lubaczowskie</div>
                    <div>Lubaczowski</div>
                    <div>Lubaczowie</div>
                    <div>Lubaczów</div>
                    <div>Oleszyce</div>
                    <div>Cieszanów</div>
                </ul>
            </div>
            <span>Made by <a href='https://www.linkedin.com/in/krystian-zaluski' target='_blank'>Krystian Załuski</a></span>
        </div>
        </>
    )
}