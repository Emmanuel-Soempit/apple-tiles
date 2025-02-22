

export default function CompOne() {
  return (
    <div className="grid grid-cols-3  justify-between w-full cols-span-1 md:h-[20%] h-[20%] gap-x-2">

    <div className=" items-center text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-2 md:p-5 rounded-3xl shadow-md ">
      <span>Up to</span>
      <span className="text-4xl font-bold">37x</span>
      <span>fastest gpu</span>
    </div>

    <div className="  items-center text-center text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-2 md:p-5 b rounded-3xl   ">
      <span className="text-center">Six Speaker sound system with partial audio</span>
    </div>
    
    <div className=" items-center text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-2 md:p-5 b rounded-3xl  ">
      <span>Up to</span>
      <span className="text-4xl font-bold">13x</span>
      <span>fastest graphics</span>
    </div>


  </div>
  );
}
