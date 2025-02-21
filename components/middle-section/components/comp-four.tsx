export default function CompFour() {
  return (
    <div className="grid grid-cols-4 cols-span-1 h-[20%] gap-x-2">
      <div className="w-full  items-center bg-gray-200 h-full justify-center gap-1 flex flex-col p-5 border rounded-[25%] shadow-md shadow-gray-300">
        <span>Up to</span>
        <span className="text-4xl font-bold">2x</span>
        <span>battery life</span>
      </div>

      <div className="w-full col-span-2 flex  items-center bg-gray-200 h-full justify-center gap-5 p-5 b rounded-2xl  ">
      <img
        className="object-cover h-full w-[40%]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWikf1vTUXGZnLRMfTtQukWZDa9vDy-FEdQ&usqp=CAU"
        alt=""
      />
      <img
        className="object-cover h-full w-[40%]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWikf1vTUXGZnLRMfTtQukWZDa9vDy-FEdQ&usqp=CAU"
        alt=""
      />
      </div>
      <div className="w-full  items-center bg-gray-200 h-full justify-center gap-1 flex flex-col p-5 b rounded-[25%]  ">
        <span>Up to</span>
        <span className="text-4xl font-bold">2x</span>
        <span>battery life</span>
      </div>
    </div>
  );
}
