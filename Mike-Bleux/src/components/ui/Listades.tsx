export const Listades = () => {
  return (
    <>
      <div className="flex items-center justify-end w-full h-full">
          <ul className="flex gap-4 font-bold text-[12px] ">
              <li className="text-white font-semibold hover:text-[#f0f0f0] cursor-pointer">About</li>
              <li className="text-white font-semibold hover:text-[#f0f0f0] cursor-pointer">Features</li>
              <li className="text-white font-semibold hover:text-[#f0f0f0] cursor-pointer">Use case</li>
              <li className="text-white font-semibold hover:text-[#f0f0f0] cursor-pointer">Pricings</li>
          </ul>
         <button type="button" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-cyan-50 w-[100px] h-[40px] rounded-[5px] ml-[10px]">Download</button>
      </div>
    </>
  )
}
