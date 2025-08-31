import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";


const heavyStuff = (iterationNumber: number)=>{
    console.time('Time_heavy');
    for (let index = 0; index < iterationNumber; index++) {
       console.log('Ahi vamos');
       
        
    }
    console.timeEnd('Time_heavy');

    return  `${iterationNumber} iteraciones realizadas`;
}


export const MemoCounter = ()=>{
    const { counter, increment}  = useCounter(40000);
    
    const { counter: counter2, increment: increment2}  = useCounter(10);

    const myHeavyValue = useMemo(()=>heavyStuff(counter),[counter]);
    return (<>
      <div className="bg-gradient flex flex-col gap-4">
        <h1>Use Memo - Hook {myHeavyValue}</h1>

        <hr />

        <h4>Counter: {counter}</h4>
        <button onClick={increment}>+1</button>


         <h4>Counter 2: {counter2}</h4>
        <button onClick={increment2}>+1 counter 2</button>
      </div>
    </>)
}