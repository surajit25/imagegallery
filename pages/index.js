import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './banner'
import Gallery from './gallery'
import Seo from './seo-content'

export default function Home() {
  return (
    <>
    <Banner />

    <Gallery />


    <Seo />
    
    
    </>
  )
}
