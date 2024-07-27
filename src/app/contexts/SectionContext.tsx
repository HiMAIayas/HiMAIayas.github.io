"use client"

import React, { useState, createContext, useContext } from 'react'

interface SectionContextProviderProp{
    children:React.ReactNode;
}

interface SectionContextType{
    activeSection:string;
    setActiveSection:React.Dispatch<React.SetStateAction<string>>;
    lastClick:number;
    setLastClick:React.Dispatch<React.SetStateAction<number>>;
}

export const SectionContext = createContext<SectionContextType | null>(null);

export default function SectionContextProvider({children}:SectionContextProviderProp) {
    const [activeSection, setActiveSection] = useState("Home");
    const [lastClick, setLastClick] = useState(0);
  return (
    <SectionContext.Provider value={{
        activeSection,
        setActiveSection,
        lastClick,
        setLastClick
    }}>
        {children}
    </SectionContext.Provider>
  )
}

export function useSectionContext(){
    const context = useContext(SectionContext);
    if (context === null){
        throw new Error("useSectionContext must be used within SectionContextProvider");
    }
    return context;
}
