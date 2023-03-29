import style from './styles/Gallery.module.scss';

import Image from 'next/image';

import image1 from '../public/images/gallery/1.jpg'
import image2 from '../public/images/gallery/2.jpg'
import image3 from '../public/images/gallery/3.jpg'
import image4 from '../public/images/gallery/4.jpg'
import image5 from '../public/images/gallery/5.jpg'
import image6 from '../public/images/gallery/6.jpg'
import { useEffect, useRef } from 'react';

export default function Gallery({children, setComponentsHeihgt}){

    const galleryRef = useRef(null)

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, gallery: galleryRef.current.offsetHeight}))
    }, [])

    const images = [image1, image2, image3, image4, image5, image6]

    const getImageDiv = ()=>{
        let current = []
        for (let i=0; i<images.length; i++){
            current.push(
                <div key={i} className={style.image}>
                    <Image alt='carImage' src={images[i]}/>
                </div>
            )
        }
        return current
    }

    return(
        <div className={style.gallery} ref={galleryRef}>
            <div className={style.background}/>
            <div className={style.container}>
                {getImageDiv()}
            </div>
        </div>
    )
}