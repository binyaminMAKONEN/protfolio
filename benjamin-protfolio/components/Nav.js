import React from 'react'
import { BsFillMoonStarsFill,BsSun } from "react-icons/bs";
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
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              >
              
                <a href='https://content.celero.io/s/56798897/binyamin-cv/?is_fit_page_zoom=true' target='blank'>

                  Resume
                </a>
              </li>
            </ul>
          </nav>
  )
}

export default Nav