import React from 'react'
import "./Home.css";

import Mostervideo from '../../assets/Monstervideo.mp4'
import Monsterpic from '../../assets/Monster Pic.png'
import CircularGallery from '../../Component/CircularGallery/CircularGallery';
import Navbar from '../../Component/Navbar/Navbar';
import MainContent from '../../Component/MainContent/MainContent';
import Wavyline from '../../Component/Wavyline/Wavyline';
import TextCenter from '../../Component/TextCenter/TextCenter';
import TextRight from '../../Component/TextRight/TextRight';
import CenterContainer from '../../Component/CenterContainer/CenterContainer';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
  return (
    <div className='main-container'>
    <div className="container">
       <video className='bg-video' autoPlay loop playsInline muted src={Mostervideo}></video>
       {/* <img src={Monsterpic} alt="" /> */}
     <Navbar/>
    <MainContent/>
    </div>
    <Wavyline/>
<TextCenter/>
<TextRight/>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery
    bend={1}
    textColor="#ffffff"
    borderRadius={0.05}
    scrollEase={0.05}
    fontUrl=""
    font="bold 30px Orbitron"
    scrollSpeed={2}
/>
</div>
<CenterContainer/>
<Footer/>
    </div>
  )
}

export default Home