export default function CompOne() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full md:h-[20%] h-[20%] gap-x-2">
      <div className="flex-col h-[30%] md:h-full w-full md:w-[20%] items-center text-center  font-normal text-foreground bg-card shadow-card/40 justify-center text-md gap-2 flex p-3 rounded-[25px] shadow-md ">
        <img
          className=" h-[80%] object-cover"
          src="/padlock.png"
          alt=""
        />{" "}
        <span>Secure eclave</span>
      </div>

      <div className="  w-full md:w-[32%] h-[30%] md:h-full items-center text-foreground bg-card shadow-card/40  justify-center gap-1 flex flex-col p-2 md:p-5 b rounded-3xl  ">
        <span>Up to</span>
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
          13x
        </span>
        <span>fastest graphics</span>
      </div>

      <div className="w-full md:w-[50%] h-[35%] md:h-full items-center text-center text-foreground bg-card shadow-card/40 justify-center gap-1 flex flex-col p-2 md:p-5 b rounded-3xl   ">
      <img
          className="w-[80%] h-[80%] object-cover"
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
