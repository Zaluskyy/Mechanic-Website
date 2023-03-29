import style from './styles/Services.module.scss';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';


import circleArrowIcon from '../public/images/icons/buttons/circleArrow.svg';

import ServicePopUp from './ServicePopUp';

import servicesJson from '../public/json/services.json';

export default function Services({children, setComponentsHeihgt}){

    const servidesRef = useRef(null)

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, services: servidesRef.current.offsetHeight}))
    }, [])

    const [popUp, setPopUp] = useState({open: false, number: 0})
    
    const topSliderContainerRef = useRef(null);
    const bottomSliderContainerRef = useRef(null);

    const sliderWidth = {
        containerPadding: 20,
        marginElement: 5,
        element: 300,
    }

    const all = sliderWidth.element*3+sliderWidth.marginElement*6+sliderWidth.containerPadding*2

    useEffect(()=>{
        topSliderContainerRef.current.scrollTo({
            left: (all-window.innerWidth)/2,
            behavior: "smooth",
        });
        bottomSliderContainerRef.current.scrollTo({
            left: (all-window.innerWidth)/2,
            behavior: "smooth",
          });
    }, [])

    const openPopUp = (number)=>{
        setPopUp(prev=>({...prev, open: true, number: number}))
    }

    const service = (serviceNumber)=>{
        return(
            <div className={style.service}>
                <Image className={style.icon} src={servicesJson[serviceNumber].icon} alt='glassImg' width={30} height={30}/>
                <h4>{servicesJson[serviceNumber].title}</h4>
                <p>{servicesJson[serviceNumber].shortDescription}</p>
                <button onClick={()=>openPopUp(serviceNumber)}> 
                    <span>Więcej</span>
                    <Image src={circleArrowIcon} alt='arrowIcon' width={30} height={30}/>
                </button>
            </div>
        )
    }
    
    return(
        <div className={style.services} ref={servidesRef}>
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
            {/* <ServicePopUp/> */}
            {popUp.open?<ServicePopUp setPopUp={setPopUp} number={popUp.number} extended={popUp.number==0} />: ''}
        </div>
    )
}