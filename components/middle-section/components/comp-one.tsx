

export default function CompOne() {
  return (
    <div className="grid grid-cols-3  justify-between w-full cols-span-1 h-[20%] gap-x-2">

    <div className=" items-center bg-gray-200 h-full justify-center gap-1 flex flex-col p-5 border rounded-[25%] shadow-md shadow-gray-300">
      <span>Up to</span>
      <span className="text-4xl font-bold">37x</span>
      <span>fastest gpu</span>
    </div>

    <div className="  items-center bg-gray-200 h-full justify-center gap-1 flex flex-col p-5 b rounded-[25%]  ">
      <span className="text-center">Six Speaker sound system with partial audio</span>
    </div>
    <div className="w items-center bg-gray-200 h-full justify-center gap-1 flex flex-col p-5 b rounded-[25%]  ">
      <span>Up to</span>
      <span className="text-4xl font-bold">13x</span>
      <span>fastest graphics</span>
    </div>


  </div>
  );
}
