export default function CompTwo() {
  return (
    <div className="grid grid-cols-3 cols-span-1 max-h-[15%] gap-x-1">
      <div className="w-full  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 flex flex-col p-5 rounded-3xl shadow-md ">
        <span>Up to</span>
        <span className="text-4xl font-bold bg-gradient-to-r from-[#D4597C] via-[#D18767] to-[#E4AC65] bg-clip-text text-transparent">
          8TB
        </span>
        <span>storage</span>
      </div>

      <div className="w-full  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 flex flex-col p-5 b rounded-3xl  ">
        <img
          className="object-cover h-full w-full"
          src="/fingerprint.png"
          alt=""
        />{" "}
        <span>Touch Id</span>
      </div>

      <div className="w-full  items-center text-foreground bg-card shadow-card/40  h-full justify-center gap-1 flex flex-col p-5 b rounded-3xl  ">
        <img
          className="object-cover h-full w-full"
          src="/wifi.png"
          alt=""
        />{" "}
        <span>Wi-Fi 6</span>
      </div>
    </div>
  );
}
