import { Plus } from 'lucide-react'

import logo from "./assets/logo-in-orbit.svg"
import letsStart from './assets/lets-start-illustration.svg'

export function App() {
  return (
   <div className="flex flex-col items-center justify-center h-screen gap-8">
    <img src={logo} alt="in.orbit" />
    <img src={letsStart} alt="lets start" />
    <p className="leading-relaxed text-center text-zinc-300 max-w-80">Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?</p>

    <button className='px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tighter hover:bg-violet-600'>
      <Plus className='size-4'/>
      Cadastrar meta      
    </button>
   </div>
  )
}