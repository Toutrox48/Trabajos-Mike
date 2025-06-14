import { Imagen } from "./components/ui/Imagen"

import { useState } from "react"
import { Login } from "./components/ui/login"

export const App = () => {
  const [clicksN, setClicksN] = useState(0)
  const [clicksU, setClicksU] = useState("Caramelo")
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Imagen />
      <Login />

      <p className="mt-4 border-1 rounded-2xl px-6">Clicks: {clicksN}</p>
      <div className="flex space-x-4">
        <button onClick={() => setClicksN(clicksN + 1)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Click me
        </button>
        <button onClick={() => setClicksN(clicksN - 1)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Dont click me
        </button>
      </div>

      <p  className="mt-10 border-1 rounded-2xl px-6" >Eres: {clicksU}</p>
      <div>

        <button onClick={() => setClicksU("Hombre")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 m-2">
          Hombre
        </button>
        <button onClick={() => setClicksU("Mujer")} className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 m-2">
          Mujer
        </button>
        <button onClick={() => setClicksU("Mango")} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 m-2">
          Mango
        </button>
      </div>
    </div>
  )
}
