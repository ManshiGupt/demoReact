import React, { createContext, useContext, useState } from 'react'

const theamContext= createContext();
const Context = ({children}) => {
   
    const[t,setT]= useState("lidght");
    const handleToggle=()=>{
        setT((prev)=>
           ( prev === "light"? "dack":"light")
        )
    }

  return (
    <div>
        <theamContext.Provider value={{t, handleToggle}}>
            {children}
        </theamContext.Provider>
    </div>
  )
}

export default Context

export const  useTheme =()=>useContext(theamContext);