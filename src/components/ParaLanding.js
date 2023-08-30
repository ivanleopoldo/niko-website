import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

function ParaLanding() {
    return (
      <ParallaxProvider>
       <img src={require('../images/pexels-jan-zakelj-9389356.jpg')}/>
     </ParallaxProvider>
     
    );
  }
  
  export default ParaLanding;