import { useTrafficLight } from "./hooks/trafficCustomHook";

export const TrafficLightWidthHook = () => {

  const { light, countDown,colors} = useTrafficLight();
  return (



    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      
      <div className="flex flex-col items-center space-y-8">
        
      <h1 className="text-white text-xl">Semaforo con el hook prueba</h1>
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