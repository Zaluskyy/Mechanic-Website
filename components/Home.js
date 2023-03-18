import style from './styles/Home.module.scss'
import Image from 'next/image';
import backgroundImage from '../public/images/background.jpg';
import callIcon from '../public/images/icons/call.svg';
import downIcon from '../public/images/icons/down.svg';

export default function Home({children}){
    return(
        <div className={style.home}>
            <Image className={style.bgImage} alt='Auto' src={backgroundImage}/>
            <div className={style.overlay}></div>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h1>Naprawa aut powypadkowych</h1>
                    <h2>Usługi blacharsko-lakiernicze w Lubaczowie</h2>
                </div>
                <div className={style.buttonsContainer}>
                    <button className={style.contactBtn}>
                        <Image alt='callIcon' src={callIcon}/>
                        <span>Skontaktuj się z nami</span>
                    </button>
                    <button className={style.offerBtn}>
                        <Image alt='downIcon' src={downIcon}/>
                        <span>Zobacz ofertę</span>
                    </button>
                </div>
            </div>
        </div>
    )
}