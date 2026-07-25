
import { useEffect } from "react";
import "./TextRight.css";

import AOS from "aos";
import "aos/dist/aos.css";
const TextRight = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
  return (
   <div className="text-right">
     <h2>We Have</h2>
  
   <h2>08 <sup data-aos="zoom-in">Freaking</sup><br />Flavors</h2>
</div>
  )
}

export default TextRight