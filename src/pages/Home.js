import React from 'react';
import { Navbar, DrawerLeft, Footer, Content, Card, Pagination } from '../components';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex justify-center items-center mt-3">
        <Content />
      </div>
      <div className='flex flex justify-center items-center mt-3'>
        <Pagination/>
      </div>
      <div className="flex-1"></div> {/* Add this to create an empty space */}
      <div className="flex-start mr-10">
        <div className="flex-1 ">
          {/* <Drawerleft /> */}
        </div>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;