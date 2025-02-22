export default function CompTwo() {
  return (
    <div className="grid grid-cols-2 cols-span-1 h-[20%] space-x-2">

      <div className="w-full  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 flex flex-col p-5 rounded-3xl shadow-md ">
        <span>Up to</span>
        <span className="text-4xl font-bold">8TB</span>
        <span>storage</span>
      </div>

      <div className="w-full  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 flex flex-col p-5 b rounded-3xl  ">
        <span>Up to</span>
        <span className="text-4xl font-bold">64GB</span>
        <span>memory</span>
      </div>


    </div>
  );
}
