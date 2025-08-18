import { useEffect, useState } from "react";

// type TrafficLightCollor = 'red' | 'yellow' | 'green';

  const colors = {
    'red': 'bg-red-500 animate-pulse',
    'yellow': 'bg-yellow-500 animate-pulse',
    'green': 'bg-green-500 animate-pulse'
  }
// Otra alternativa para que se adapte en base a la constante color
type TrafficLightCollor = keyof typeof colors
export const TrafficLightWidthEffect = () => {

  const [light, setLight] = useState<TrafficLightCollor>('red');
  const [countDown,setCountDown ]= useState(5);
  
  // useEffect para el countDown
  useEffect(()=>{
    if(countDown ===0 ) return;
   const intervalId =  setInterval(()=>{
      setCountDown((prev) => prev-1)
    },1000)
    return ()=>{
      clearInterval(intervalId);
    }
  },[countDown]);
// useEffect para la variable Light
  useEffect(()=>{
    if(countDown === 0 ){
      setCountDown(5);
      if(light === 'red') {
        setLight('green');
        return;
      }
      else if(light === 'green'){
          setLight('yellow');
           return;
      } 
      else if(light === 'yellow') setLight('red');
      
      return;
   }
  },[light,countDown])

  return (



    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      
      <div className="flex flex-col items-center space-y-8">
        
      <h1 className="text-white text-xl">Semafoto con useEffect</h1>
      <h2 className="text-white text-3xl">{countDown}</h2>
      <div className="w-64 bg-gray-700 rounded-full h-2">
         <div  className="bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-linear"
         style={{width: `${ (countDown/5)*100}%`}}
         ></div>
      </div>
        <div className={`w-32 h-32 ${ light === 'red' ? colors.red :'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'yellow' ? colors.yellow :'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'green' ? colors.green :'bg-gray-500'} rounded-full`}></div>

      </div>
    </div>
  );
};