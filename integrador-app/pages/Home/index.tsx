import React from 'react';

import NavBarHomePage from '@/components/navBarHomePage';

import Link from 'next/link';

import { Star } from 'lucide-react';
import Image from 'next/image';

import img from '@/public/velozes.jpg';
const HomePage = () => {
  return (
    <>
      <NavBarHomePage />
      <main className=" w-screen h-screen flex items-center justify-center">
        < div className="w-screen h-[800px] overflow-y-auto overflow-x-auto flex items-center justify-center">
          <div className=' grid grid-cols-3 gap-10 w-screen items-center'>
            <div className="h-96 w-64 rounded-xl bg-zinc-50 ml-10"></div>
          </div>
          
         
          
        </div>
      </main>
    </>
  );
};

export default HomePage;
