import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { AiOutlineMail ,AiOutlinePhone } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main = () => {
  return (
    <div id='home' className='w-full text-center py-10 '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-white'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700 text-5xl   font-medium md:text-6xl  dark:text-white'>
            Hi, I&#39;m <span className='text-[#5651e5] dark:text-teal-400'> Benjamin Makonen</span>
          </h1>
          <h1 className='py-2 text-gray-700 dark:text-white'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-white'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/binyamin-makonen/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-white dark:shadow-none  shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/binyaminMAKONEN'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-white dark:shadow-none shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='mailto:banmkonen@gmail.com'>
              <div className='rounded-full bg-white dark:shadow-none shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='tel:+972547524222'>
              <div className='rounded-full bg-white dark:shadow-none shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlinePhone />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;