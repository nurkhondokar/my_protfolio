"use client"
import React,{FC, useState} from 'react'
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar:FC = () => {
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        link: "Home",
        url:"/"
      },
      {
        id: 2,
        link: "About",
        url:"about",
      },
      {
        id: 3,
        link: "Skill",
        url:"skill"
      },
      {
        id: 4,
        link: "experience",
        url:"experience"
      },
      {
        id: 5,
        link: "Contact",
        url:"contact"
      },
    ];
  return (
    <>
    <div className=" flex justify-between items-center w-full h-12 px-4 text-white bg-black fixed nav lg:px-[10rem]">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-3xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            NK-DEV
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, url}) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={url}>{link}</Link>
          </li>
        ))}
      </ul>
     

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-blue-400 backdrop:blur-xl text-gray-100 ">
          {links.map(({ id, link, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl text-white"
            >
              <Link onClick={() => setNav(!nav)} href={url}>
                {link}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer capitalize text-3xl bg-pink-700  rounded-md px-20 py-1">Download CV</li>
        </ul>
        
      )}
      <div className='hidden md:block bg-pink-700 rounded-md px-2 py-1'>
        <button >
            Download CV
        </button>
      </div>
      
      
    </div>
      
    </>
  )
}

export default Navbar
