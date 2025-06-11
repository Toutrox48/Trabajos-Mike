
type  PrecioProps = {
  titulo: string;
  precio: number;
  descripcion: string[];
  boton: string;
  height: number;
  colorfondo: string;
  colorTexto: string;
  colorborder: string;
}

export const Precio = (props: PrecioProps) => {
  const { titulo, precio, descripcion, boton, height, colorfondo, colorTexto, colorborder } = props;

  return (
    <div className="shadow-2xs rounded-lg flex flex-col items-center justify-center w-[375px] bg-[#fff] p-4" style={{ height: `${height}px`, backgroundColor: colorfondo, color: colorTexto }}>
      <h1 className="font-extrabold" style={{ color: colorTexto }}>{titulo}</h1>
      <div className="flex items-center justify-center gap-2" style={{ color: colorTexto }}>
        <p className="text-[40px] font-[font-montserrat]" style={{ color: colorTexto }}>$</p>
        <p className="text-[75px] font-[font-weight: 700]" style={{ color: colorTexto }}>{precio}</p>
      </div>
      <ul className="w-[330px] flex items-center content-center flex-col mt-5 mb-5">
        <li className="pt-3 pb-3 pl-22 pr-22 flex items-center border-t-1 " style={{ borderColor: colorborder }}>{descripcion[0]}</li>
        <li className="pt-3 pb-3 pl-22 pr-22 flex items-center border-t-1 " style={{ borderColor: colorborder }}>{descripcion[1]}</li>
        <li className="pt-3 pb-3 pl-22 pr-22 flex items-center border-t-1  border-b-1 " style={{ borderColor: colorborder }}>{descripcion[2]}</li>
      </ul>
      <button className="w-[330px] h-[40px] bg-gradient-to-r from-indigo-300 to-indigo-500 text-white  rounded-md mb-5 mt-10">{boton}</button>
    </div>
  )
}
