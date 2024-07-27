"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { titles } from '../libs/data'
import { useSectionContext } from '../contexts/SectionContext'
import { AnimatePresence, motion } from 'framer-motion'

interface RefProps {
  refArr: Array<React.MutableRefObject<HTMLInputElement | null>>;
}


export default function Navbar({ refArr }: RefProps) {
  const [nav, setNav] = useState("transparent");
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setLastClick } = useSectionContext()


  //Check Scroll
  const navClick = (ref: React.MutableRefObject<HTMLInputElement | null>, title: string) => {
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
    <div className={`fixed top-0 left-0 z-30 w-full flex items-center md:justify-center shadow-md md:shadow-none justify-end px-5 py-5 md:bg-transparent ${(nav == "transparent" && !isOpen) ? "bg-transparent text-white" : "bg-white"} ease-in-out duration-500`}>
      {/*Logo*/}


      {/*Center*/}
      <div className={`text-sm hidden md:flex rounded-full px-3 py-2 shadow-md ${(nav == "transparent" ? "bg-transparent " : "bg-slate-200/75 backdrop-blur-sm ")} ease-in-out duration-500`}>
        <div className='flex gap-14'>

          {titles.map((title, index) => (

            <div className='relative cursor-pointer px-5 py-1' key={title}>
              <span className="mix-blend-difference relative z-50 text-white"
                onClick={() => navClick(refArr[index], title)}
              >{title}</span>

              {activeSection === title && (
                <motion.div className={`absolute  top-0 left-0 w-full h-full rounded-full z-40 ${(nav == "transparent" ? "bg-transparent" : "bg-white")} `}
                  layoutId='underlined'
                  transition={{
                    ease: 'easeInOut',
                    type: 'spring',
                    duration: 0.5,
                    bounce: 0.2
                  }}
                ></motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/*Hamburgur*/}
      <div>
        <div className='flex md:hidden '>
          <div className='relative z-50 flex flex-col gap-1 cursor-pointer mix-blend-difference'
            onClick={() => { setIsOpen(!isOpen) }}>
            <div className={`w-6 h-1 rounded-sm bg-slate-50 ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`}></div>
            <div className={`w-6 h-1 rounded-sm bg-slate-50 ${isOpen ? "opacity-0" : ""} ease-in-out duration-300`}></div>
            <div className={`w-6 h-1 rounded-sm bg-slate-50 ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`}></div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={"closed"}
                animate={"open"}
                exit={"closed"}
              >
                <motion.div className='absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-white origin-top'
                  variants={{
                    open: {
                      scaleY: 1,
                      transition: {
                        type: "spring", bounce: 0, duration: 0.5, delayChildren: 0.3, staggerChildren: 0.05
                      }
                    },
                    closed: {
                      scaleY: 0,
                      transition: { type: "spring", bounce: 0, duration: 0.3 }
                    }
                  }}
                >
                  <div className='flex flex-col h-3/4 w-full justify-evenly'>
                    {titles.map((title, index) => (
                      <motion.div className='overflow-hidden w-full flex justify-center bg-white cursor-pointer text-xl font-extrabold py-3'
                        key={title}
                        whileTap={{ backgroundColor: "#EBEBEB" }}
                        onClick={() => {
                          navClick(refArr[index], title);
                          setIsOpen(false);
                        }}
                      >
                        <motion.span

                          variants={{
                            open: {
                              opacity: 1,
                              y: 0,
                              transition: { type: "spring", stiffness: 300, damping: 24 }
                            },
                            closed: {
                              opacity: 0,
                              y: 20,
                              transition: { duration: 0.4 }
                            }
                          }}

                        >{title}</motion.span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
