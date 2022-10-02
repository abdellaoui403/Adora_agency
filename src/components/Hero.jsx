import React from 'react'
import styles from '../style';
import {  robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <span className="text-white font-Universo font-semibold" >Marketing Digital Agency</span>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-Universo font-black ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Expand <br className="sm:block" />{" "} 
        <span className="text-gradient sm:absolute">Your Social</span><br className="sm:block hidden" /> {" "} 
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
        </div>
      </div>
      <h1 className="font-Universo font-black ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Reach.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Choose Adora as your digital marketing agency and propel your buisness to new heights with our award-winning digital marketing services and technology platform.</p>
    
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full buttom-40 white__gradient"/>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
   
    
    </section>
)

export default Hero