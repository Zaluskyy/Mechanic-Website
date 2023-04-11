import Head from 'next/head'
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

import { useEffect, useState } from 'react'

export default function Index() {
  const [ scrollTo, setScrollTo ] = useState('')
  const [ scrollChanged, setScrollChanged ] = useState(0)
  const [ resized, setResized ] = useState(false)
  
  const handleResize = ()=>{
    setResized(prev=>!prev)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return ()=>{
        window.removeEventListener('resize', handleResize)
    }
  }, [])

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
    
    if(navigator.userAgent.match(/firefox/i)){
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }else{
      document.body.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }

  useEffect(()=>{
    scroll()
  }, [scrollChanged])

  return (
    <>
      <Head>
        <title>Tadeusz Załuski</title>
        <meta
          name='author'
          content='Krystian Załuski'
        />
        <meta
          name='description'
          content='Firma Handlowo-Usługowa „Mechanika Pojazdowa” jest warsztatem samochodowym świadczącym usługi blacharsko-lakiernicze od 1994 r.'
        />
        <meta
          name='keywords'
          content='blacharka, blacharnictwo, naprawa, mechanik, mechanika, lakiernik, lakiernictwo, warsztat, Załuski, Lubaczowskie, Lubaczowski, Lubaczowie, Lubaczów, Oleszyce, Cieszanów'
        />
        <meta
          property='og:title'
          content='Tadeusz Załuski - lakiernik samochodowy'
        />
        <meta
          property='og:description'
          content='Firma Handlowo-Usługowa „Mechanika Pojazdowa” jest warsztatem samochodowym świadczącym usługi blacharsko-lakiernicze od 1994 r.'
        />
      </Head>
      <Nav 
      setComponentsHeihgt={setComponentsHeihgt} 
      setScrollTo={setScrollTo} 
      setScrollChanged={setScrollChanged} 
      />
      <Home 
      setComponentsHeihgt={setComponentsHeihgt} 
      setScrollTo={setScrollTo} 
      setScrollChanged={setScrollChanged} 
      resized={resized}
      />
      <About 
      setComponentsHeihgt={setComponentsHeihgt} 
      setScrollTo={setScrollTo} 
      setScrollChanged={setScrollChanged} 
      resized={resized}
      />
      <Services 
      setComponentsHeihgt={setComponentsHeihgt}
      setScrollTo={setScrollTo} 
      setScrollChanged={setScrollChanged} 
      resized={resized}
      />
      <Gallery 
      setComponentsHeihgt={setComponentsHeihgt} 
      resized={resized}
      />
      <Contact/>
      <Footer 
      setScrollTo={setScrollTo} 
      setScrollChanged={setScrollChanged} 
      />
    </>
  )
}
