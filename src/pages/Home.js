import React from 'react';
import Navbar from '../components/Navbar';
import Drawerleft from '../components/drawerleft';
import Footer from '../components/footer';
import Content from '../components/Content';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center mt-3">
        <Content />
      </div>
      <div className="flex-initial mr-10"></div>
      <div className="flex-1 ">
        <Drawerleft />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;