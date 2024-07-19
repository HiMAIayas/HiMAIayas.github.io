import React from 'react'

interface LogoProps{
    logo_src:string;
    lang:string;
}


export default function LogoCard({logo_src,lang}:LogoProps) {
  return (
    <div className="flex flex-col items-center">
        <img className="w-[75px]" src={logo_src}></img>
        <div>{lang}</div>
    </div>
  )
}
