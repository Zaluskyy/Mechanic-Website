import Head from 'next/head'
import Image from 'next/image'
import variable from '../styles/variables.module.scss'
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from '../components/About';
import Test from '../components/Test'


export default function Index() {
  return (
    <>
      <Head>
        <title>Tadeo Zaluskyyy</title>
        
      </Head>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      {/* <Test></Test> */}
      
    </>
  )
}
