import style from './styles/Contact.module.scss';

import Image from 'next/image';

import callIcon from '../public/images/icons/contact/call.svg'
import emailIcon from '../public/images/icons/contact/email.svg'
import locationIcon from '../public/images/icons/contact/location.svg'

import buttonCallIcon from '../public/images/icons/buttons/call.svg';
import buttonLocationIcon from '../public/images/icons/contact/buttonLocation.svg';
import buttonEmailIcon from '../public/images/icons/contact/buttonEmail.svg';

import mapsImg from '../public/images/mapsImg.png';

export default function Contact({children}){

    const contacts = [
        {
            icon: callIcon,
            name: 'Numer telefonu',
            content: '+ 48 605-606-343',
            buttonText: 'Zadzwoń',
            buttonIcon: buttonCallIcon
        },
        {
            icon: emailIcon,
            name: 'Adres email',
            content: 'danuta_zaluska@gmail.com',
            buttonText: 'Napisz do nas',
            buttonIcon: buttonEmailIcon,
        },
        {
            icon: locationIcon,
            name: 'Adres',
            content: 'Ul. Piaskowa 8A',
            buttonText: 'Znajdź nas',
            buttonIcon: buttonLocationIcon,
        },
    ]

    const getContacts = ()=>{
        let current = []
        for(let i=0; i<contacts.length; i++){
            current.push(
                <div className={style.container} key={contacts[i].name}>
                    <div className={style.imageContainer}>
                        <Image alt={`${contacts[i].title} image`} src={contacts[i].icon}/>
                    </div>
                    <h3>{contacts[i].name}</h3>
                    <h4>{contacts[i].content}</h4>
                    <button>
                        <Image alt={`${contacts[i].title} image`} src={contacts[i].buttonIcon}/>
                        <span>{contacts[i].buttonText}</span>
                    </button>
                </div>
            )
        }
        return current
    }

    return(
        <div className={style.contact}>
            <h3 className={style.title}>Skontaktuj się z nami</h3>
            {getContacts()}
            <Image alt='maps' src={mapsImg} className={style.maps}/>
        </div>
    )
}