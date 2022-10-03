import styles from '../style';
import { arrowUp ,getStarted} from '../assets';
import gsap from 'gsap';
import {useRef,useEffect} from "react";

const GetStarted = () =>{
    const imgRef = useRef(null);
    useEffect(()=>{
        const el = imgRef.current;
        const loopAnim = gsap.to(el,{rotation: "+=360", ease: "none",duration:6, repeat:-1})

    },[])
    return(
    <div className={`${styles.flexCenter} relative w-[160px] h-[160px] ss:mb-0 mb-10`}>
        <img src={getStarted} ref={imgRef} className="absolute"/>
        <img src={arrowUp} alt="arrow" className="w-[50px] h-[50px] object-contain" />
    </div>
    );s
}

export default GetStarted