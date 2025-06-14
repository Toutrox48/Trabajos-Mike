import { useState } from "react" 

export const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleLogin = () => {   // Aquí podrías agregar la lógica de autenticación
        console.log("Email:", Email);
        console.log("Password:", Password);
    }

  return (
    <div className="flex flex-col items-center justify-center w-[300px] bg-blue-300 rounded-[10px]">
        <h1 className="m-5"> Login </h1>
        <input value={Email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="m-2 p-2 border bg-white border-gray-300 rounded " />
        <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="m-2 p-2 border bg-white border-gray-300 rounded" />
        <button onClick={handleLogin} className="m-5 p-2 w-[100px] bg-teal-100 hover:bg-teal-200 rounded-2xl">Login</button>

        <div className="m-5 p-2 w-[300px] bg-green-100 hover:bg-green-200 ">
          <p className="text-green-500"> {Email} </p>
          <p className="text-green-500"> {Password} </p>
        </div>
    </div>
  )
}
