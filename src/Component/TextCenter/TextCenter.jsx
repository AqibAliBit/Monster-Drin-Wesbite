
import { useEffect } from "react";
import "./TextCenter.css";

import AOS from "aos";
import "aos/dist/aos.css";
const TextCenter = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
  return (
    <div className="text-center">
     <h2>STIR UP YOUR <br /> FEARLESS PAST AND</h2>
   <h3  data-aos="zoom-in" >FIRE UP</h3>
   <h2>YOUR FUTURE WITH EVERY <br /> GULP OF PERFECT CAFFEINE</h2>
</div>
  )
}

export default TextCenter