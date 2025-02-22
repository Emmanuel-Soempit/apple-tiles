export default function CompFour() {
  return (
    <div className="flex  gap-3  md:md-0 md:h-[20%] gap-x-2">
      <div className="lg:w-full w-[40%] items-center text-foreground bg-card shadow-card/40  overflow-hidden h-full justify-center gap-1 flex flex-col  rounded-3xl shadow-md ">
       
      <img
        className="object-cover h-full w-full"
        src="faceid.png"
        alt=""
      />
      </div>

      <div className="w-full col-span-2 flex  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-5 p-5  rounded-2xl  ">
      <img
        className="object-cover h-full w-[40%]"
        src="ultra.png"
        alt=""
      />
      <img
        className="object-cover h-full w-[40%]"
        src="ultra.png"
        alt=""
      />
      </div>
      <div className="w-full hidden  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 md:flex flex-col p-5 b rounded-3xl  ">
        <span>Up to</span>
        <span className="text-4xl font-bold">2x</span>
        <span>battery life</span>
      </div>
    </div>
  );
}
