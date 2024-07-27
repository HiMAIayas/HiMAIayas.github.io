"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { titles } from '../libs/data'
import { useSectionContext } from '../contexts/SectionContext'
import { motion } from 'framer-motion'

interface RefProps {
  refArr:Array<React.MutableRefObject<HTMLInputElement | null>>;
}


export default function Navbar({ refArr }: RefProps) {
  const [nav,setNav] = useState("transparent");
  const [isOpen,setIsOpen] = useState(false);
  const {activeSection,setActiveSection,setLastClick} = useSectionContext()


  //Check Scroll
  const navClick = (ref: React.MutableRefObject<HTMLInputElement | null>, title:string) => {
    setActiveSection(title);
    setLastClick(Date.now());
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const scrollEventListener = () => {
    if (window.scrollY > screen.height / 4) setNav("colored");
    else setNav("transparent");
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListener);
  }, []);


  return (
    <div className={`fixed top-0 left-0 z-30 w-full flex items-center md:justify-center justify-end px-20 py-10 h-12 md:bg-transparent ${(nav == "transparent") ? "bg-transparent text-white" : "bg-white"} ease-in-out duration-500`}>
      {/*Logo*/}


      {/*Center*/}
      <div className={`text-sm hidden md:flex rounded-full px-3 py-2 shadow-md ${(nav == "transparent" ? "bg-transparent " : "bg-slate-200/75 backdrop-blur-sm ")} ease-in-out duration-500`}>
        <div className='flex gap-16'>

          {titles.map((title,index)=>(

            <div className='relative cursor-pointer px-2 py-1' key={title}>
              <span className="mix-blend-difference relative z-50 text-white"
              onClick={()=>navClick(refArr[index],title)}
              >{title}</span>

              {activeSection===title && (
                <motion.div className={`absolute  top-0 left-0 w-full h-full rounded-full z-40 ${(nav == "transparent"?"bg-transparent":"bg-white")} `}
                layoutId='underlined'
                transition={{
                  ease:'easeInOut',
                  type:'spring',
                  duration:0.5,
                  bounce:0.2
                }}
                ></motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/*Hamburgur*/}
      <div>
        <div className='flex md:hidden'>
          <div className='flex flex-col gap-1 cursor-pointer'
            onClick={() => { setIsOpen(!isOpen) }}>
            <div className={`w-6 h-1 rounded-sm bg-blue-500 ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`}></div>
            <div className={`w-6 h-1 rounded-sm bg-blue-500 ${isOpen ? "opacity-0" : ""} ease-in-out duration-300`}></div>
            <div className={`w-6 h-1 rounded-sm bg-blue-500 ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`}></div>
          </div>

          {isOpen && (
            <div className='absolute left-0 top-20 w-full bg-black z-10 origin-top' >

              {titles.map((title,index)=>(
                <div key={title} className='cursor-pointer' 
                onClick={()=>navClick(refArr[index],title)}>{title}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
