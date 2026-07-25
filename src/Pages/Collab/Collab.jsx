import React from 'react'
import "./Collab.css";
import Navbar from '../../Component/Navbar/Navbar'
import img13 from '../../assets/monsterdrinkpic/img13.jpg'
import img14 from '../../assets/monsterdrinkpic/img14.jpg'
import img15 from '../../assets/monsterdrinkpic/img15.jpg'
import FlyingPosters from '../../Component/FlyingPosters/FlyingPosters';
const Collab = () => {
  const items = [
  'https://i.pinimg.com/736x/20/c2/21/20c221c05cc4a57b781eed1d492592ea.jpg', 
  'https://picsum.photos/600/600?grayscale', 
  'https://picsum.photos/400/400?grayscale'
];
  return (
    <div>
      <Navbar/>
      <div style={{ height: '600px', position: 'relative' }}>
  <FlyingPosters items={items}
  items={[img13,img14,img15]}
  planeWidth={320}
  planeHeight={320}
  distortion={3}
  scrollEase={0.01}
  cameraFov={45}
  cameraZ={20}
/>
</div>
    </div>
  )
}

export default Collab