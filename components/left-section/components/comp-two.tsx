export default function CompTwo() {
  return (
    <div className="flex gap-2 cols-span-1 h-[20%]">

      <div className="w-[40%] items-center text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-5 rounded-3xl shadow-md">
        <span>Up to</span>
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">2x</span>
        <span>battery life</span>
      </div>

      <div className="flex-col w-[60%] items-center  font-normal text-foreground bg-card shadow-card/40 justify-center text-md gap-2 flex p-5 rounded-[25px] shadow-md ">
      <img
           className="w-full h-[60%] object-cover"
          src="/devices.png"
          alt=""
        />{" "}
        <span>Iphone and Ipad Apps</span>
      </div>


    </div>
  );
}
