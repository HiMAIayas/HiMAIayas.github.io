import React, { useEffect, useRef } from 'react'
import { useSectionContext } from '../contexts/SectionContext';
import { useInView } from 'framer-motion';

function getActiveSectionRef(title:string) {
    const {setActiveSection,lastClick} = useSectionContext();
    const ref = useRef(null);
    const inView = useInView(ref,{margin:"-49% 0%"});
    
    useEffect(()=>{
        if (inView && Date.now()-lastClick > 1000){
            setActiveSection(title);
        }
    });
  return ref;
}

export default function useActiveSectionRef(titles:Array<string>){
    const refArr = titles.map((title)=>getActiveSectionRef(title));
    return refArr;
}
