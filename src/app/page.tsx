"use client"

import Image from "next/image";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import LogoCard from "./components/LogoCard";
import useActiveSectionRef from "./hooks/useActiveSectionRef";
import { titles } from "./libs/data";
import ProjectCard from "./components/ProjectCard";

export default function Home() {


  const home_ref = useActiveSectionRef(titles[0]);
  const about_ref = useActiveSectionRef(titles[1]);
  const skill_ref = useActiveSectionRef(titles[2]);
  const showcase_ref = useActiveSectionRef(titles[3]);
  const refArr = [home_ref, about_ref, skill_ref, showcase_ref];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      

      <Navbar refArr={refArr}></Navbar>



      {/*Background Cover (Home)*/}
      <div ref={home_ref} className="w-full bg-cover bg-[rgba(0,0,0,0.7)]">
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


      {/*About*/}
      <div ref={about_ref} className="w-full flex flex-col items-center px-48 pb-10 bg-[#05030b]">
        <div className="text-3xl text-white font-bold mb-8">About Me</div>

        <div className="text-white">
          I am digital enginnering student at SIIT, Thammasat University, Thailand. ค่อยใส่เพิ่มไดไม ขก.คิด
        </div>

      </div>


      {/*Skill*/}
      <div ref={skill_ref} className="px-5 py-12 w-full bg-slate-100 flex flex-col items-center">
        <div className="text-4xl font-bold">Skills</div>
        <div className=" flex gap-5 mt-16 items-start flex-row justify-center flex-wrap">
          <div className=" rounded-2xl bg-white p-5 shadow-md">
            <div className="text-xl w-full text-center font-bold mb-5">Languages</div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 w-full rounded-2xl bg-slate-100 p-5">
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" lang="Python"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" lang="Javascript"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" lang="Typescript"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" lang="HTML"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" lang="CSS"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" lang="Java"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000" lang="C++"></LogoCard>
            </div>
          </div>
          <div className=" rounded-2xl bg-white p-5 shadow-md">
            <div className="text-xl w-full text-center font-bold mb-5">Frameworks</div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 w-full rounded-2xl bg-slate-100 p-5">
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=40253&format=png&color=000000" lang="Jquery"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" lang="React"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" lang="NextJS"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000" lang="Flutter"></LogoCard>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-md">
            <div className="text-xl w-full text-center font-bold mb-5">Data Science Libraries</div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 w-full rounded-2xl bg-slate-100 p-5">
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000" lang="Pandas"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000" lang="Numpy"></LogoCard>

            </div>
          </div>
        </div>
      </div>



      


      {/*Project*/}
      <div ref={showcase_ref} className="px-5 py-12 w-full bg-slate-100 flex flex-col items-center">
        <div className="text-4xl font-bold">Showcases</div>
        <div>
          <ProjectCard></ProjectCard>
        </div>
      </div>

    </main>
  );
}
