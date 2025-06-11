import { BotonesPP } from "../ui/BotonesPP"


export const ProductPage = () => {
  return (
    <div className="w-full h-[calc(80vh-66px)] bg-[#2f2551] text-[#fff] flex flex-row items-center justify-between content-center px-10 mt[100px]">
        <div className="flex flex-col items-start justify-center w-[60%] h-full px-5 ">
            <h1 className="mb-10 text-[40px] font-bold ">
                Product<br/>Page
            </h1>
            <p>
                We built this template to help you create modern <br/>
                and beautiful marketing page
            </p>
            <BotonesPP/>
        </div>
        <div className="w-[border-1 border-amber-50 calc(100vh-66px)] h-[calc(80vh-66px)]" />
        
    </div>
  )
}
