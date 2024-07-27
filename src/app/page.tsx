"use client"

import Image from "next/image";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import LogoCard from "./components/LogoCard";
import useActiveSection from "./hooks/useActiveSection";
import { titles } from "./libs/data";

export default function Home() {

  const home_ref = useActiveSection("About");
  const about_ref = useActiveSection("About");
  const skill_ref = useActiveSection("Skills");
  const showcase_ref = useActiveSection("Showcases");
  const refArr = titles.map((title)=>useActiveSection(title));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Navbar refArr={refArr}></Navbar>



      {/*Background Cover*/}
      <div ref={refArr[0]} className="w-full bg-cover bg-[rgba(0,0,0,0.7)]">
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
      <div ref={refArr[1]} className="w-full flex flex-col items-center px-48 pb-10 bg-[#05030b]">
        <div className="text-3xl text-white font-bold mb-8">About Me</div>

        <div className="text-white">
          I am digital enginnering student at SIIT, Thammasat University, Thailand. ค่อยใส่เพิ่มไดไม ขก.คิด
        </div>

      </div>


      {/*Skill*/}
      <div ref={refArr[2]} className="px-5 py-12 w-full bg-slate-100 flex flex-col items-center">
        <div className="text-4xl font-bold">Skills</div>
        <div className=" flex gap-5 mt-16 items-start lg:flex-row flex-col">
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
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000" lang="Dart"></LogoCard>
            </div>
          </div>
          <div className=" rounded-2xl bg-white p-5 shadow-md">
            <div className="text-xl w-full text-center font-bold mb-5">Frameworks</div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 w-full rounded-2xl bg-slate-100 p-5">
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" lang="NodeJS"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=40253&format=png&color=000000" lang="Jquery"></LogoCard>
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" lang="Bootstrap"></LogoCard>
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
              <LogoCard logo_src="https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000" lang="Pytorch"></LogoCard>

            </div>
          </div>
        </div>
      </div>



      


      {/*Project*/}
      <div ref={refArr[3]} className="px-5 py-12 w-full bg-slate-100 flex flex-col items-center">
        <div className="text-4xl font-bold">Showcases</div>
        <div>

        </div>
      </div>

    </main>
  );
}
