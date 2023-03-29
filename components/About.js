import style from './styles/About.module.scss';
import downIcon from '../public/images/icons/buttons/down.svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function About({children, setComponentsHeihgt, setScrollTo}){

    const aboutRef = useRef(null)

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, about: aboutRef.current.offsetHeight}))
    }, [])

    const scroll =(where)=>{
        setScrollTo(where)
    }
    return(
        <div className={style.about} ref={aboutRef}>
            <ul className={style.top}>
                <li>29 LAT DOŚWIADCZENIA</li>
                <li>SETKI ZADOWOLONYCH KLIENTÓW</li>
                <li>NAJWYŻSZA JAKOŚĆ USŁUG</li>
            </ul>
            <div className={style.bottom}>
                <h3>O nas</h3>
                <p>
                Firma Handlowo-Usługowa „Mechanika Pojazdowa” jest warsztatem samochodowym świadczącym usługi blacharsko-lakiernicze od 1994 r. Filarem naszej firmy jest doświadczenie i wiedza zdobywana na przestrzeni lat. W naszym warsztacie używamy profesjonalnego sprzętu i wysokiej jakości materiałów lakierniczych. Świadczymy fachowe doradztwo a wszelkie naprawy konsultujemy na bieżąco z naszymi klientami.
                </p>
                <button onClick={()=>scroll('GALLERY')}>
                    <Image alt='downIcon' src={downIcon}/>
                    <span>Zobacz galerię</span>
                </button>
            </div>
        </div>
    )
}