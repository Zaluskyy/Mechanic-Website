import style from './styles/Contact.module.scss';

import Image from 'next/image';

import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false
});

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import callIcon from '../public/images/icons/contact/call.svg'
import emailIcon from '../public/images/icons/contact/email.svg'
import locationIcon from '../public/images/icons/contact/location.svg'

import buttonCallIcon from '../public/images/icons/buttons/call.svg';
import buttonLocationIcon from '../public/images/icons/contact/buttonLocation.svg';
import buttonEmailIcon from '../public/images/icons/contact/buttonEmail.svg';

import { slide, variantOne, variantThree, variantTwo } from './AnimationVariants';
import { useEffect } from 'react';

import ButtonAnimation from './ButtonAnimation';

export default function Contact({children}){

    const { ref: contactRef, inView: contactVisible } = useInView();
    const { ref: mapRef, inView: mapVisible } = useInView();

    const controlContact = useAnimation();
    const controlMap = useAnimation();

    useEffect(()=>{
        controlContact.start("hidden")
        controlMap.start("hidden")
    }, [])
    useEffect(()=>{
        contactVisible && controlContact.start("visible")
    }, [contactVisible])
    useEffect(()=>{
        mapVisible && controlMap.start("visible")
    }, [mapVisible])

    const contacts = [
        {
            icon: callIcon,
            name: 'Numer telefonu',
            content: '+ 48 605-606-343',
            buttonText: 'Zadzwoń',
            buttonIcon: buttonCallIcon,
            href: 'tel: 605 606 343',
        },
        {
            icon: emailIcon,
            name: 'Adres email',
            content: 'danuta_zaluska@gmail.com',
            buttonText: 'Napisz do nas',
            buttonIcon: buttonEmailIcon,
            href: 'mailto: danuta_zaluska@wp.pl'
        },
        {
            icon: locationIcon,
            name: 'Adres',
            content: 'Ul. Piaskowa 8A',
            buttonText: 'Znajdź nas',
            buttonIcon: buttonLocationIcon,
            href: 'https://goo.gl/maps/isiZgAE9ezVdcj3m8',
        },
    ]

    const getVariant = (number)=>{
        if(number==0) return variantOne
        else if(number==1) return variantTwo
        else if(number==2) return variantThree
    }

    const getContacts = ()=>{
        let current = []
        for(let i=0; i<contacts.length; i++){
            current.push(
                <motion.div 
                className={style.container} 
                key={contacts[i].name}
                animate={controlContact}
                // variants={variantOne}
                variants={getVariant(i)}
                >
                    <div className={style.imageContainer}>
                        <Image alt={contacts[i].name} src={contacts[i].icon}/>
                    </div>
                    <h3>{contacts[i].name}</h3>
                    <h4>{contacts[i].content}</h4>
                    <ButtonAnimation tabIndex={"-1"}>
                        <a href={contacts[i].href} target='_blank'>
                            <Image alt={contacts[i].buttonText} src={contacts[i].buttonIcon}/>
                            <span>{contacts[i].buttonText}</span>
                        </a>
                    </ButtonAnimation>

                </motion.div>
            )
        }
        return current
    }

    return(
        <div className={style.contact}>
            <h3 className={style.title} ref={contactRef}>Skontaktuj się z nami</h3>
            <div className={style.elements}>
                {getContacts()}
            </div>
            <motion.div 
            className={style.mapsContainer}
            ref={mapRef}
            animate={controlMap}
            variants={slide}
            >
            <MapWithNoSSR/>
            </motion.div>
        </div>
    )
}