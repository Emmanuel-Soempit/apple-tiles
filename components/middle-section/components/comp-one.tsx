export default function CompOne() {
  return (
    <div className="flex  lg:justify-between w-full lg:h-[20%]  h-[33%] lg:gap-2  gap-4">
      <div className="flex-col h-full w-[20%] items-center text-center  font-normal text-foreground bg-card shadow-card/40 justify-center text-md gap-2 flex p-3 rounded-[25px] shadow-md ">
        <img
          className=" h-[50px] lg:h-[80%] object-cover"
          src="/padlock.png"
          alt=""
        />{" "}
        <span>Secure eclave</span>
      </div>

      <div className="  w-[35%] lg:w-[32%] h-full items-center text-foreground bg-card shadow-card/40  justify-center gap-1 flex flex-col p-2 md:p-5 b rounded-3xl  ">
        <span>Up to</span>
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
          13x
        </span>
        <span>fastest graphics</span>
      </div>

      <div className="w-[35%] lg:w-[50%] h-full items-center text-center text-foreground bg-card shadow-card/40 justify-center gap-1 flex flex-col p-2 md:p-5 b rounded-3xl   ">
      <img
          className="w-[80%]  h-[100px]  lg:h-[80%] object-cover"
          src="/sound.png"
          alt=""
        />{" "}
        <span className="text-center">
          Six Speaker sound system with partial audio
        </span>
      </div>
    </div>
  );
}
