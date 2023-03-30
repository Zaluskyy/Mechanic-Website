import style from './styles/Gallery.module.scss';

import Image from 'next/image';

import image1 from '../public/images/gallery/1.jpg'
import image2 from '../public/images/gallery/2.jpg'
import image3 from '../public/images/gallery/3.jpg'
import image4 from '../public/images/gallery/4.jpg'
import image5 from '../public/images/gallery/5.jpg'
import image6 from '../public/images/gallery/6.jpg'
import { useEffect, useRef, useState } from 'react';

import GalleryPopUp from './GalleryPopUp';

export default function Gallery({children, setComponentsHeihgt}){

    const [ openImage, setOpenImage ] = useState(false);
    const [ selectedImage, setSelectedImage ] = useState(1);

    const galleryRef = useRef(null)

    const getImage = (number)=>{
        setOpenImage(true)
        setSelectedImage(number)
    }

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, gallery: galleryRef.current.offsetHeight}))
    }, [])

    const images = [image1, image2, image3, image4, image5, image6]

    const getImageDiv = ()=>{
        let current = []
        for (let i=0; i<images.length; i++){
            current.push(
                <div key={i} onClick={()=>getImage(i)} className={style.image}>
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
            {openImage?<GalleryPopUp images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} setOpenImage={setOpenImage}/>:''}
        </div>
    )
}