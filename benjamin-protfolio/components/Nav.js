import React from 'react'
import { BsFillMoonStarsFill,BsSun } from "react-icons/bs";
import Link from 'next/link'
const Nav = ({activeDarkMode,darkMode}) => {

  return (
    <nav className=" py-10 mb-12 flex justify-between bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-10">
            <h1 className="font-medium text-xl">Benjamin Makonen Portfolio</h1>
            <ul className="flex items-center">
              <li>
                {darkMode?
                <BsFillMoonStarsFill
                onClick={activeDarkMode}
                className=" cursor-pointer text-2xl"
                />
              :
              <BsSun
              onClick={activeDarkMode}
              className=" cursor-pointer text-2xl"
              />
              }
              </li>
              <li
                className="bg-gradient-to-r from-cyan-700 text- to-cyan-500 dark:bg-gradient-to-r dark:from-cyan-500 text- dark:to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              >
              
                <Link href='resume'>

                  Resume
                </Link>
              </li>
            </ul>
          </nav>
  )
}

export default Nav