import React from "react";


export interface Props {
    title: string;
}

export const MyTitle = React.memo(({ title}: Props)=>{
    console.log('Titulo')
    return (<h1 className="text-2xl font-thin text-white">{title}</h1>)
})