import { Plus} from 'lucide-react'

import logo from "./assets/logo-in-orbit.svg"
import letsStart from './assets/lets-start-illustration.svg'
import { Button } from './components/ui/ui/button'
import { Dialog, DialogTrigger } from './components/ui/ui/dialog'
import { CreateGoal } from './components/create-goal'

export function App() {
  return (
    <Dialog>
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={letsStart} alt="lets start" />
        <p className="leading-relaxed text-center text-zinc-300 max-w-80">Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?</p>

        <DialogTrigger asChild>
          <Button>
            <Plus className='size-4'/>
            Cadastrar meta      
          </Button>
        </DialogTrigger>
     </div>

     <CreateGoal/>
    </Dialog>
  )
}