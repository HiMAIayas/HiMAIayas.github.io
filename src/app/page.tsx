"use client"

import Image from "next/image";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import WrapperDropdown from "./components/WrapperDropdown";

export default function Home() {

  const background_ref = useRef(null);
  const project_ref = useRef(null);
  const contact_ref = useRef(null);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Navbar 
      background_ref={background_ref} 
      project_ref={project_ref}
      contact_ref={contact_ref}
      ></Navbar>

      

      {/*UseRef AutoScroll*/}
      <div className="w-full bg-cover bg-[rgba(0,0,0,0.7)]">
        <img className="z-0 min-h-screen object-cover mix-blend-overlay" src="/mountain-bg.jpg"></img>
        <div className="z-1 absolute h-screen top-0 left-0 flex flex-col gap-5 w-full justify-center items-center">
          <div className="text-white text-wrap text-6xl font-bold">Phumipas Namjaidee</div>
          <div className="flex justify-center">
            <img className="scale-50 hover:scale-[0.6]" src="/github.png"></img>
            <img className="scale-50 hover:scale-[0.6]" src="/social-media.png"></img>
            <img className="scale-50 hover:scale-[0.6]" src="/linkedin.png"></img>
          </div>
        </div>
      </div>

      {/*Wrapper Dropdown ChildrenProp*/}
      <div className="w-full">
        <WrapperDropdown topic="About">
          <div>hello</div>
        </WrapperDropdown>
        
        <WrapperDropdown topic="Projects">
          <div>hello2</div>
        </WrapperDropdown>
        
        <WrapperDropdown topic="Contacts">
          <div>hello2</div>
        </WrapperDropdown>
        
      </div>

    </main>
  );
}
