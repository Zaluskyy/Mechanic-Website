import style from './styles/Services.module.scss';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';


import circleArrow from '../public/images/icons/circleArrow.svg';

import glassImg from '../public/images/icons/services/glass.svg'
import sprayerImg from '../public/images/icons/services/sprayer.svg'
import lampImg from '../public/images/icons/services/lamp.svg'
import doorImg from '../public/images/icons/services/door.svg'
import polisherImg from '../public/images/icons/services/polisher.svg'
import dropImg from '../public/images/icons/services/drop.svg'

export default function Services({children}){

    const servicesArrow = [
        {
            icon: doorImg,
            title: 'Usługi blacharskie',
            shortDescription: 'Naprawy które mają na celu przywrócenie dawnego wyglądu i stanu auta',
        },
        {
            icon: sprayerImg,
            title: 'Usługi lakiernicze',
            shortDescription: 'Malowanie całego auta i wybranych elementów pojazdu ',
        },
        {
            icon: polisherImg,
            title: 'Renowacja powłoki lakierniczej',
            shortDescription: 'Usuwamy nieestetyczne rysy i zmatowienia na powłoce lakieru auta',
        },
        {
            icon: lampImg,
            title: 'Polerowanie lamp',
            shortDescription: 'Polerowanie lamp daje lepszą widoczność na drodze i poprawia estetykę auta',
        },
        {
            icon: glassImg,
            title: 'Wymiana szyb samochodowych',
            shortDescription: 'W naszym warsztacie wymieniamy szyby, dostosowując się do indywidualnych potrzeb klienta.',
        },
        {
            icon: dropImg,
            title: 'Mieszalnia farb samochodowych',
            shortDescription: 'Dobieramy farbę idealnie pod kolor twojego auta',
        },
    ]
    
    const topSliderContainerRef = useRef(null);
    const bottomSliderContainerRef = useRef(null);

    const sliderWidth = {
        containerPadding: 20,
        marginElement: 5,
        element: 300,
    }

    const all = sliderWidth.element*3+sliderWidth.marginElement*6+sliderWidth.containerPadding*2

    useEffect(()=>{
        // console.log(topSliderContainerRef.current.clientWidth);
        topSliderContainerRef.current.scrollTo({
            left: (all-window.innerWidth)/2,
            behavior: "smooth",
        });
        bottomSliderContainerRef.current.scrollTo({
            left: (all-window.innerWidth)/2,
            behavior: "smooth",
          });
    }, [])

    const service = (serviceNumber)=>{
        return(
            <div className={style.service}>
                <Image className={style.icon} src={servicesArrow[serviceNumber].icon} alt='glassImg'/>
                <h4>{servicesArrow[serviceNumber].title}</h4>
                <p>{servicesArrow[serviceNumber].shortDescription}</p>
                <button> 
                    <span>Więcej</span>
                    <Image src={circleArrow} alt='arrowIcon'/>
                </button>
            </div>
        )
    }
    
    return(
        <div className={style.services}>
            <h3 className={style.title}>Oferta</h3>
            <div className={style.topSliderContainer} ref={topSliderContainerRef}>
                {service(2)}
                {service(0)}
                {service(3)}
            </div>
            <div className={style.bottomSliderContainer} ref={bottomSliderContainerRef}>
                {service(4)}
                {service(1)}
                {service(5)}
            </div>
        </div>
    )
}