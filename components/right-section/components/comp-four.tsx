export default function CompFour() {
  return (
    <div className="grid grid-cols-2  mb-5 cols-span-1 h-[10%] gap-x-2">
      <div className="w-full  items-center text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-2 rounded-3xl shadow-md">
        <span className="text-4xl font-bold  text-center bg-gradient-to-r from-[#D4597C] via-[#D18767] to-[#E4AC65] bg-clip-text text-transparent">
          P3 wide color
        </span>
      </div>

      <div className="w-full  items-center g-card text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-w b rounded-3xl  ">
        <span className="text-4xl font-bold bg-gradient-to-r from-[#76437D]  to-[#615485] bg-clip-text text-transparent">
          13.3
        </span>
        <span>Retina display</span>
      </div>
    </div>
  );
}
