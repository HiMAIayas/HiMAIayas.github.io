"use client"

import React, {useEffect, useState} from 'react'
import Link from 'next/link'

interface RefProps{
  background_ref:React.MutableRefObject<HTMLInputElement | null>;
  project_ref:React.MutableRefObject<HTMLInputElement | null>;
  contact_ref:React.MutableRefObject<HTMLInputElement | null>;
}

export default function Navbar({background_ref,project_ref,contact_ref}:RefProps){
  const [isOpen, setIsOpen] = useState(false);
  const [nav,setNav] = useState("transparent");


  //Functions
  const autoScroll = (ref:React.MutableRefObject<HTMLInputElement | null>)=>{
    if (ref.current){
      ref.current.scrollIntoView({ behavior: "smooth", block:"start"});
    }
  }

  const scrollEventListener = () =>{
    if (window.scrollY>screen.height/4) setNav("colored");
    else setNav("transparent");
  }


  useEffect(()=>{
    window.addEventListener('scroll',scrollEventListener);
  },[]);
  

  return (
    <div className={`fixed top-0 left-0 z-50 w-full flex items-center md:justify-center justify-end px-20 py-10 h-12 md:bg-transparent ${(nav=="transparent")? "bg-transparent text-white":"bg-white"} ease-in-out duration-500`}>
        {/*Logo*/}
        

        {/*Center*/}
        <div className={`text-sm hidden md:flex rounded-full px-5 py-3 gap-16 shadow-md ${(nav=="transparent"? "bg-transparent text-white":"bg-slate-50/75 backdrop-blur-sm text-black")} ease-in-out duration-500`}>
          <div className='cursor-pointer'>Home</div>
          <div className='cursor-pointer' onClick={()=>autoScroll(background_ref)}>About</div>
          <div className='cursor-pointer' onClick={()=>autoScroll(project_ref)}>Skills</div>
          <div className='cursor-pointer' onClick={()=>autoScroll(contact_ref)}>Showcases</div>
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
                <div className='cursor-pointer' onClick={()=>autoScroll(background_ref)}>Background</div>
                <div className='cursor-pointer' onClick={()=>autoScroll(project_ref)}>Projects</div>
                <div className='cursor-pointer' onClick={()=>autoScroll(contact_ref)}>Contacts</div>
            </div>
        )}
    </div>
        </div>
    </div>
  )
}
