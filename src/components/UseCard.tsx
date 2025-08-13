import Image from "next/image";

const UseCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl min-w-[130px] p-4 flex-1 odd:bg-[#CECEFE] even:bg-[#FAE17C]">
     
      <div className="flex justify-between items-center ">
        <span className=" text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/2025</span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl my-4 font-semibold">1544</h1>
      <h2  className=" capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UseCard;

