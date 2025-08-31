import { useCallback, useState } from "react"
import { MyTitle } from "./ui/mytitle"
import { Subtitle } from "./ui/subtitle";


export const MemoHook = () =>{
    const [title, setTitle ] = useState('Hola');
     const [subtitle, setSubTitle ] = useState('Mundo');
    
     const handleAPI =  useCallback(()=>{
        console.log('LLAMANDO API')
    },[]);



    return (<>
    <div className="bg-gradient flex flex-col gap-4">
        <MyTitle title={title} ></MyTitle>
        <Subtitle callMyAPI={handleAPI} title={subtitle}></Subtitle>
        <button
        onClick={(e)=>setTitle('Hello'+ Date.now())}
        className="bg-indigo-600 text-white px-2 py-1 cursor-pointer">Cambiar titulo</button>


        <button 
        
        onClick={(e)=>setSubTitle('World')}
        className="bg-indigo-600 text-white px-2 py-1 cursor-pointer">Cambiar subtitulo</button>
    </div>
    </>)
}