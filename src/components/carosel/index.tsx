import React from 'react';
import { Carousel } from 'antd';
import MyImage1 from '../../assets/sut1.jpg'
import MyImage2 from '../../assets/Untitled-1400-×-400px-4.png'
import MyImage3 from '../../assets/test1.jpeg'
import MyImage4 from '../../assets/Singapore Skyline banner 1200px 400px.png'
const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#364d79',
  marginTop: '-16px',
  padding:"0px",
  

};

const Carosel: React.FC = () => (
  <Carousel autoplay style={{margin:"-24px"}}>
    <div>
      <h3 style={contentStyle}><img src={MyImage1}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={MyImage2}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={MyImage3}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={MyImage4}/></h3>
    </div>
  </Carousel>
);

export default Carosel;