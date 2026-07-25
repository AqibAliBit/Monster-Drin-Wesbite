import React from 'react'
import "./MainContent.css";
import { RiFacebookFill  } from "@remixicon/react";
import { RiTwitterXLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiYoutubeLine} from "@remixicon/react";
import Monstersmallvideo from '../../assets/Monstersmallvideo.mp4'
import {useNavigate} from 'react-router-dom'
const MainContent = () => {
  let navigate=useNavigate()
      const date = new Date();

let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12 || 12;
console.log(`${hours}:${minutes}:${seconds}`);
  return (
    <div className="main-content">
      <div className="inner1">
        <div className="Upper">
         <h1>Ignite your Pulse <br /> with <span>CAFFEINE</span></h1>
         <h4>Monster Drink</h4>
         <button className='shop' onClick={()=>{
       navigate('/Drinks')
         }}>Shop Now</button>
         </div>
         <div className="icons">
          <RiFacebookFill size={16} />
          <RiTwitterXLine size={16}/>
          <RiInstagramLine size={16}/>
          <RiYoutubeLine size={16}/>
         </div>
      </div>
      <div className="inner2">
    <div className="time">
      <div className="hour">{hours}</div>
      <div className="minute">{minutes}</div>
      <div className="am">{ampm}</div>
    </div>
    <div className="down">
      <div className="small-pics">
      <div className="circle">
        <img src="https://i.pinimg.com/736x/94/8a/a3/948aa31c78b6f82d521a60bd82510fb4.jpg" alt="" />
      </div>
      <div className="circle">
        <img src="https://i.pinimg.com/control1/736x/fa/f7/41/faf741c6f2785465ff4ab987bf2287cd.jpg" alt="" />
      </div>
      <div className="circle">
        <img src="https://i.pinimg.com/736x/28/9c/14/289c14f7342171468efc1ea3d3d512dd.jpg" alt="" />
      </div>
      </div>
      <div className="small-video">
        <video  autoPlay loop playsInline muted  src={Monstersmallvideo}></video>
      </div>
    </div>
      </div>
      </div>
      
  )
}

export default MainContent