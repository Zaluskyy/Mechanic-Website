import style from './styles/GalleryPopUp.module.scss';
import Image from 'next/image';
import arrow from '../public/images/icons/buttons/down.svg'
import { useEffect } from 'react';

export default function GalleryPopUp({children, images, selectedImage, setSelectedImage, setOpenImage}){

    useEffect(()=>{
        document.addEventListener('mousedown', (e)=>{
            console.log(e.key)
        })
        document.body.style.overflow = 'hidden'
        return()=>{
            document.body.style.overflow = 'auto';
        }
    }, [])

    const closePopUp = ()=>{
        setOpenImage(false)
    }

    console.log(selectedImage);

    const changeImage = (toRight=true)=>{
        if(!toRight && selectedImage>0) setSelectedImage(prev=>prev-1)
        else if(!toRight && selectedImage<=0) setSelectedImage(images.length-1)
        else if(toRight && selectedImage<images.length-1) setSelectedImage(prev=>prev+1)
        else if(toRight && selectedImage>=images.length-1) setSelectedImage(0)
    }

    const handleKeyDown = (e)=>{
        if(e.key == 'ArrowLeft') changeImage(false)
        if(e.key == 'ArrowRight') changeImage(true)
        if(e.key == 'Escape') closePopUp()
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
        }
    })
    
    return(
        <div className={style.galleryPopUp}>
            <div className={style.background} onClick={closePopUp} />
            <div className={style.imgContainer}>
                <Image src={images[selectedImage]} alt='image'/>
            </div>
            <button className={style.leftArrow} onClick={()=>changeImage(false)}>
                <Image src={arrow} alt='leftArrow' />
            </button>
            <button className={style.rightArrow} onClick={changeImage}>
                <Image src={arrow} alt='rightArrow' />
            </button>
            <button className={style.exit} onClick={closePopUp}>
                <div/>
            </button>
            
        </div>
    )
}