export default function CompOne() {
  return (
    <div className="flex h-[15%] justify-between flex-row-reverse">
      <div className="w-[60%] flex-col  items-center text-foreground bg-card shadow-card/40 justify-center text-md font-bold gap-3 flex p-5 rounded-[25px] shadow-md ">
      <img
          className="w-full h-[70%] object-cover"
          src="laptop.png"
          alt=""
        />
        <span>Thunderbolt / USB 4</span>
      </div>
      <div className="w-[30%]  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 flex flex-col p-5 rounded-3xl shadow-md ">
        <span>Up to</span>
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">8TB</span>
        <span>storage</span>
      </div>
    </div>
  );
}
