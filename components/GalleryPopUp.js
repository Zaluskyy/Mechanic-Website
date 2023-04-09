import style from './styles/GalleryPopUp.module.scss';
import Image from 'next/image';
import arrow from '../public/images/icons/buttons/down.svg'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { openPopUp } from './AnimationVariants';

export default function GalleryPopUp({children, images, selectedImage, setSelectedImage, setOpenImage}){

    const leftArrowRef = useRef(null)
    const rightArrowRef = useRef(null)

    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return()=>{
            document.body.style.overflow = 'auto';
        }
    }, [])

    const closePopUp = ()=>{
        setOpenImage(false)
    }


    const changeImage = (toRight=true)=>{
        if(!toRight && selectedImage>0) setSelectedImage(prev=>prev-1)
        else if(!toRight && selectedImage<=0) setSelectedImage(images.length-1)
        else if(toRight && selectedImage<images.length-1) setSelectedImage(prev=>prev+1)
        else if(toRight && selectedImage>=images.length-1) setSelectedImage(0)
    }

    const handleKeyDown = (e)=>{
        if(e.key == 'ArrowLeft') {
            changeImage(false)
            leftArrowRef.current.focus();
        }
        else if(e.key == 'ArrowRight'){
            changeImage(true)
            rightArrowRef.current.focus();
        } 
        else if(e.key == 'Escape') closePopUp()
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
        }
    })
    
    return(
        <div className={style.galleryPopUp}>
            <motion.div 
            className={style.background} 
            onClick={closePopUp} 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}


            />
            <motion.div 
            className={style.imgContainer}
            variants={openPopUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <Image src={images[selectedImage]} alt='Zdjęcie'/>
            </motion.div>
            <motion.button 
            ref={leftArrowRef}
            className={style.leftArrow} 
            onClick={()=>changeImage(false)}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            whileHover={{
                scale: 1.5
            }}
            >
                <Image src={arrow} alt='Zmień zdjęcie' />
            </motion.button>
            <motion.button 
            ref={rightArrowRef}
            className={style.rightArrow} 
            onClick={changeImage}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            whileHover={{
                scale: 1.5
            }}
            >
                <Image src={arrow} alt='Zmień zdjęcie' />
            </motion.button>
            <motion.button 
            className={style.exit} 
            onClick={closePopUp}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            whileHover={{
                scale: 1.5
            }}
            >
                <div/>
            </motion.button>
            
        </div>
    )
}