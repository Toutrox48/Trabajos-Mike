import { Listades } from "../ui/Listades"


export const Header = () => {
  return (
    <>
        <header className="w-full h-[66px] bg-[#1f172f] flex flex-row items-center justify-between content-center px-4">
            <img src="https://n9.cl/b2rne" alt="" />
            <Listades />
            <div>   </div>
        </header>
    </>
  )
}
