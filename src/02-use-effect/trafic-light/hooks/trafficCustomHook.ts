import { useEffect, useState } from "react";



const colors = {
    'red': 'bg-red-500 animate-pulse',
    'yellow': 'bg-yellow-500 animate-pulse',
    'green': 'bg-green-500 animate-pulse'
}
type TrafficLightCollor = keyof typeof colors

export const  useTrafficLight = ()=>{

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



    return {
        colors,
        light,
        setLight,
        countDown,
        setCountDown
    }
}