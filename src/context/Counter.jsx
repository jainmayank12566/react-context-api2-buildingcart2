import React, { useContext, useState } from 'react';
import { createContext } from 'react';
const CounterContext=createContext(null);
export function Set(){
    const innerContext=useContext(CounterContext);
    return innerContext;
}
export const CounterProvider=(props)=>{
    const[items,setitems]=useState([]);
    return(
        <CounterContext.Provider value={{items,setitems}}>
            {props.children}
        </CounterContext.Provider>
    )
}