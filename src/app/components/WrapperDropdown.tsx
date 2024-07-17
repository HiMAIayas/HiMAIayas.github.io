import React, { useState } from 'react'
import Image from "next/image";

interface ChildrenProps {
    children: React.ReactElement;
    topic: string;
}


export default function WrapperDropdown({ children, topic }: ChildrenProps) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='my-3 rounded-md border-gray-500 border-solid border-b-2'>
            
            <div className='flex justify-center items-center group mb-2'>
                
                <div className='hidden group-hover:block'>
                    <img className='w-40' src="/arrow.png" alt="arrow"></img>
                </div>
                <div className='text-2xl font-bold px-5 py-3 rounded-md   group-hover:shadow-md cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}>
                    {topic}
                </div>
                <div className='hidden group-hover:block'>
                    <img className='w-40 scale-x-[-1]' src="/arrow.png" alt="arrow"></img>
                </div>
            </div>

            <div className={`w-full  ${isOpen ? "flex" : "hidden"}`}>
                {children}
            </div>
            


        </div>
    )
}
