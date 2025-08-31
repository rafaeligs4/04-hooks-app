import React from "react";


export interface Props {
    title: string;
    callMyAPI: ()=> void;
}

export const Subtitle = React.memo(({ title, callMyAPI}: Props)=>{
    console.log('Subtitulo re render')
    return (
        <>
        <h6 className="text-2xl font-thin text-white">{title}</h6>
        <button onClick={callMyAPI} className="bg-indigo-500 text-white px-2 py-1 cursor-pointer">Funcion de memo</button>
        </>
    )
});