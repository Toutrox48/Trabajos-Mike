import imagen1 from "../../assets/hipo-pigmeo.jpg";
import imagen2 from "../../assets/hipo-africano.jpg"

export const Imagen = () => {
  return (
    <div className="w-[170px] rounded mb-4 mt-50">
      <img className="rounded mt-2" src={imagen1} alt="" />
      <img className="rounded mt-2" src={imagen2} alt="" />
      
    </div>
  )
}
