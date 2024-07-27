import React, { useEffect, useRef } from 'react'
import { useSectionContext } from '../contexts/SectionContext';
import { useInView } from 'framer-motion';

export default function useActiveSectionRef(title:string) {
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


