import style from './styles/Footer.module.scss'

import Image from 'next/image';

import copyIcon from '../public/images/icons/copy.svg';

export default function Footer({children}){
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
                    <div className={style.copy}>
                        <Image alt='copyIcon' src={copyIcon}/>
                    </div>
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
                    <li className={style.active}>Strona główna</li>
                    <li>O nas</li>
                    <li>Usługi</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            </section>
        </footer>
    )
}