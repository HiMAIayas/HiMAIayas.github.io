"use client"

import React, {useState} from 'react'
import Link from 'next/link'

interface RefProps{
  background_ref:React.MutableRefObject<HTMLInputElement | null>;
  project_ref:React.MutableRefObject<HTMLInputElement | null>;
}

export default function Navbar({background_ref,project_ref}:RefProps){
  const [isOpen, setIsOpen] = useState(false);
  const autoScroll = (ref:React.MutableRefObject<HTMLInputElement | null>)=>{
    if (ref.current){
      ref.current.scrollIntoView({ behavior: "smooth"});
    }
  }
  
  return (
    <div className='fixed top-0 left-0 z-9 w-full flex items-center justify-between px-20 py-4 h-12 bg-black text-white'>
        {/*Logo*/}
        <div className=''>
            <Link href="/">Home</Link>
        </div>

        {/*Center*/}
        <div className='hidden md:flex gap-20'>
          <div onClick={()=>autoScroll(background_ref)}>Background</div>
          <div onClick={()=>autoScroll(project_ref)}>Projects</div>
        </div>

        {/*Hamburgur*/}
        <div>
        <div className='flex md:hidden'>
        <div className='flex flex-col gap-1 cursor-pointer'
        onClick={()=>{setIsOpen(!isOpen)}}>
            <div className={`w-6 h-1 rounded-sm bg-blue-500 ${isOpen ? "rotate-45":""} origin-left ease-in-out duration-500`}></div>
            <div className={`w-6 h-1 rounded-sm bg-blue-500 ${isOpen ? "opacity-0":""} ease-in-out duration-300`}></div>
            <div className={`w-6 h-1 rounded-sm bg-blue-500 ${isOpen ? "-rotate-45":""} origin-left ease-in-out duration-500`}></div>
        </div>

        {isOpen && (
            <div className='absolute left-0 top-20 w-full bg-blue-500 z-10'>
                <div onClick={()=>autoScroll(background_ref)}>Background</div>
                <div onClick={()=>autoScroll(project_ref)}>Projects</div>
            </div>
        )}
    </div>
        </div>
    </div>
  )
}
