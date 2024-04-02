"use client"

import MainDiv from './components/MainDiv'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <main>
      <MainDiv />
      <About />
      <Projects />
      <Footer />
    </main >
  )
}
