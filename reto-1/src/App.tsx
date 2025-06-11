import { Precio } from "./components/layouts/Precio"



export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center w-[1440] bg-[ffffff] p-4 font-Montserrat">
      <Precio titulo={"Basic"} precio={199.99} descripcion={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]} boton={"LEARN MORE"} height={450} colorfondo={""} colorTexto={"#8c8c94"} colorborder={"f1f0f0"}/>
      <Precio titulo={"Professional"} precio={249.99} descripcion={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]} boton={"LEARN MORE"} height={500} colorfondo={"#787ae3"} colorTexto={"#fff"} colorborder={"f1f0f0"}/>
      <Precio titulo={"Master"} precio={399.99} descripcion={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]} boton={"LEARN MORE"} height={450} colorfondo={""} colorTexto={"#8c8c94"} colorborder={"f1f0f0"}/>
    </div>
  )
}
