"use client"
import Hero from "./componants/Hero";
import Contact from "./componants/Contact";
import About from "./componants/About"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay: 100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,

    });
    AOS.refresh();
  },[]);
  return (
    <main>
      <div >

      <Hero />
      </div>
      <div id="#contact">

      <Contact />
      
      </div >
      <div id="#about">

      <About />
      </div>
      
    </main>
    
    
    
    
    
    
    
    
    
    
    
    
    

  );
}
