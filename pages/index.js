import Head from 'next/head'
import Image from 'next/image'
import variable from '../styles/variables.module.scss'
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

import Test from '../components/Test'
import { useEffect, useRef, useState } from 'react'


export default function Index() {

  const [ scrollTo, setScrollTo ] = useState('')

  const [ componentsHeihgt, setComponentsHeihgt ] = useState({
    nav: 0,
    home: 0,
    about: 0,
    services: 0,
    gallery: 0,
  })


  const scroll = ()=>{
    let top = undefined
    if(scrollTo == 'HOME') top = 0;
    if(scrollTo == 'ABOUT') top = componentsHeihgt.nav + componentsHeihgt.home;
    else if(scrollTo == 'SERVICES') top = componentsHeihgt.nav + componentsHeihgt.home+componentsHeihgt.about;
    else if(scrollTo == 'GALLERY') top = componentsHeihgt.nav + componentsHeihgt.home + componentsHeihgt.about + componentsHeihgt.services;
    else if(scrollTo == 'CONTACT') top = componentsHeihgt.nav + componentsHeihgt.home + componentsHeihgt.about + componentsHeihgt.services + componentsHeihgt.gallery;
    
    document.body.scrollTo({
      top,
      // behavior: 'smooth',
      behavior: 'auto',
    })
    setScrollTo(''); 
  }

  useEffect(()=>{

    scroll()
  }, [scrollTo])

  return (
    <>
      <Head>
        <title>Tadeo Zaluskyyy</title>
        
      </Head>
      <Nav setComponentsHeihgt={setComponentsHeihgt} setScrollTo={setScrollTo} ></Nav>
      <Home setComponentsHeihgt={setComponentsHeihgt} setScrollTo={setScrollTo} ></Home>
      <About setComponentsHeihgt={setComponentsHeihgt} setScrollTo={setScrollTo} ></About>
      <Services setComponentsHeihgt={setComponentsHeihgt} ></Services>
      <Gallery setComponentsHeihgt={setComponentsHeihgt} ></Gallery>
      <Contact></Contact>
      <Footer setScrollTo={setScrollTo} ></Footer>
      {/* <Test></Test> */}
      
    </>
  )
}
