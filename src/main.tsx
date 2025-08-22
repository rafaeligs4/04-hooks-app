import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TasksApp } from './05-user-reducer/taskApp'
import { ScrambleWords } from './05-user-reducer/scrambleWords'
// import { TrafficLight } from './01-use-state/trafic-light/TraficLight'
// import { TrafficLightWidthEffect } from './02-use-effect/trafic-light/TraficLight'
// import { TrafficLightWidthHook } from './02-use-effect/trafic-light/TraficLightWithHook'
// import { PokemonPage } from './03-examples/pokemonPage'
// import { FocusScreen } from './04-use-ref/FocusScreen'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWidthHook></TrafficLightWidthHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <TasksApp></TasksApp> */}
    <ScrambleWords></ScrambleWords>
  </React.StrictMode>,
)
