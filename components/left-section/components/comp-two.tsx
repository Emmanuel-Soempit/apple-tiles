export default function CompTwo() {
  return (
    <div className="grid grid-cols-2 cols-span-1 h-[20%] space-x-2">

      <div className="w-full  items-center g-card text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-5 rounded-[25%] shadow-md">
        <span>Up to</span>
        <span className="text-4xl font-bold">2x</span>
        <span>battery life</span>
      </div>

      <div className="w-full  items-center g-card text-foreground bg-card shadow-card/40 h-full justify-center gap-1 flex flex-col p-5 b rounded-[25%]  ">
        <span>Up to</span>
        <span className="text-4xl font-bold">2x</span>
        <span>battery life</span>
      </div>


    </div>
  );
}
