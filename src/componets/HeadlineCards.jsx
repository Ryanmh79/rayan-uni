import React from 'react'
import Head1 from './../assets/head1.jpg';
import Head2 from './../assets/head2.jpg';
import Head3 from './../assets/head3.jpg';

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src={Head1} alt="/" />
        </div>

                {/* Card */}
                <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Juicy Burgers</p>
                <p className='px-2'>Daily Fresh</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src={Head2} alt="/" />
        </div>

                {/* Card */}
                <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Pizza Popo</p>
                <p className='px-2'>We Deliver Pizzas</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src={Head3} alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards