
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';

const About = ({me}) => {
  return (
    <div  className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] dark:text-teal-400'>
            About
          </p>
          <h2 className='py-4 dark:text-white'>Who I Am</h2>
          <p className='py-2  text-gray-600 dark:text-white'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600 dark:text-white'>
          I work well independently and in a team with excellent human relations
          I consider myself a strong team player
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className=' relative overflow-hidden h-60 w-60 m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={me}  layout="fill" objectFit="cover" alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;