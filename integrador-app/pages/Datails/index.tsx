import React from 'react';

import Link from 'next/link';

import NavBar from '@/components/navBar';

import { List, Heart, Bookmark, Star } from 'lucide-react';


const Datails = () => {
    return (
        <div className='h-screen w-screen flex  justify-center items'>
            <NavBar />
            <main className='w-3/4 h-5/6 bg-slate-600 flex fixed top-20 rounded-xl justify-start items-start'>
                <section className='w-1/5 h-3/5 bg-black/80 ml-20 mt-32 rounded-2xl'>
                
                </section>
                <div className='h-1/2 w-1/2 justify-center flex flex-col items-center'>
                    <header className='h-12 w-3/4 text-center rounded-xl bg-black/75 mt-40'>
                        <h1 className='text-3xl font-semibold'>Titulo do filme</h1>
                    </header>

                    <div className='flex w-3/4 justify-start m-2 items-center '>
                        <div className='h-20 w-20 bg-black rounded-full items-center flex justify-center'>
                            <h1>100%</h1>
                        </div>
                        <h1 className='ml-3 text-xl font-semibold'>Avaliação dos usuários</h1>
                    </div>

                    <div className='w-3/4 border-1 bg-black p-2 rounded-lg '>
                        <h1 className='text-center text-3xl italic'>Sinopse</h1>
                        <p className='font-bold'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores natus asperiores minus, temporibus autem repudiandae adipisci fugit ex amet, porro deleniti optio! Quae voluptate magni quibusdam consequuntur odit vel voluptas!
                        </p>
                    </div>
                    <div className='w-3/4 flex items-center  gap-3'>
                        <Link href={`/`}>
                            <List />
                        </Link>

                        <Link href={`/`}>
                            <Heart />
                        </Link>

                        <Link href={`/`}>
                            < Bookmark />
                        </Link>

                        <Link href={`/`}>
                            < Star />
                        </Link>

                    </div>
                    <div className='w-3/4 fixed top-2/3 left-1/3'>
                        <h1 className='text-2xl'>Director: Name</h1>
                        

                    </div>
                </div>

            </main>

        </div>
    )
};

export default Datails;
