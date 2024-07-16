import React, { useState } from 'react'
import Image from "next/image";

interface ChildrenProps {
    children: React.ReactElement;
    topic: string;
}


export default function WrapperDropdown({ children, topic }: ChildrenProps) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            
            <div className='flex justify-center items-center group'>
                
                <div className='hidden group-hover:block'>
                    <img className='w-40' src="/arrow.png" alt="arrow"></img>
                </div>
                <div className='text-2xl font-bold px-5 py-3 rounded-md border-slate-50 border-2 group-hover:bg-gray-100 group-hover:border-gray-700 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}>
                    {topic}
                </div>
                <div className='hidden group-hover:block'>
                    <img className='w-40 scale-x-[-1]' src="/arrow.png" alt="arrow"></img>
                </div>
            </div>

            <div className={`w-full border-gray-950 border-solid border-2 ${isOpen ? "flex" : "hidden"}`}>
                {children}
            </div>

        </div>
    )
}
