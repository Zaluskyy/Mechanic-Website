import style from './styles/Gallery.module.scss';

import Image from 'next/image';

import image1 from '../public/images/gallery/1.jpg'
import image2 from '../public/images/gallery/2.jpg'
import image3 from '../public/images/gallery/3.jpg'
import image4 from '../public/images/gallery/4.jpg'
import image5 from '../public/images/gallery/5.jpg'
import image6 from '../public/images/gallery/6.jpg'
import { useEffect, useRef, useState } from 'react';

import GalleryPopUp from './popUps/GalleryPopUp';
import { AnimatePresence, delay, motion, useAnimation } from 'framer-motion';
import { appear, appear1, appear2, appear3, appear4, appear5, appear6, exitAnimation, openPopUp, variantFive, variantFour, variantOne, variantSix, variantThree, variantTwo } from '../UI/AnimationVariants';


export default function Gallery({children, setComponentsHeihgt, resized}){

    const [ openImage, setOpenImage ] = useState(false);
    const [ selectedImage, setSelectedImage ] = useState(1);

    const [ galleryVisible, setGalleryVisible ] = useState();

    const control = useAnimation();
    useEffect(()=>{
        control.start("hidden")
    }, [])
    
    useEffect(()=>{
        galleryVisible && control.start("visible")
    }, [galleryVisible])

    const galleryRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setGalleryVisible(entry.isIntersecting)
        })
        observer.observe(galleryRef.current)
    }, [])

    const getImage = (number)=>{
        setOpenImage(true)
        setSelectedImage(number)
    }

    useEffect(()=>{
        setComponentsHeihgt(prev=>({...prev, gallery: galleryRef.current.offsetHeight}))
    }, [resized])

    const images = [image1, image2, image3, image4, image5, image6]

    const getVariant = (number) =>{
        if(number==0) return appear1
        else if(number==1) return appear2
        else if(number==2) return appear3
        else if(number==3) return appear4
        else if(number==4) return appear5
        else if(number==5) return appear6
    }

    const getImageDiv = ()=>{
        let current = []
        for (let i=0; i<images.length; i++){
            current.push(
                <motion.div 
                key={i} 
                onClick={()=>getImage(i)} 
                onKeyPress={()=>getImage(i)} 
                className={style.image}
                animate={control}
                variants={getVariant(i)}
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{scale: .9}}
                >
                    <Image alt='Zdjęcie' src={images[i]}/>
                </motion.div>
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

            <AnimatePresence
            mode={'wait'}
            initial={false}
            onExitComplete={()=>null}
            >
                {openImage?<GalleryPopUp images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} setOpenImage={setOpenImage}/>:''}
            </AnimatePresence>
        </div>
    )
}