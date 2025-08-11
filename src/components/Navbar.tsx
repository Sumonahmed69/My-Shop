import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between p-4 ">
      {/* search bar */}
      <div className="hidden bg-white ring-[1.5px] ring-gray-300 px-2 text-gray-500 md:flex items-center gap-2 text-xs rounded-full">
        <Image
          src="/search.png"
          alt="search image"
          width={14}
          height={14}
        ></Image>
        <input
          type="text"
          placeholder="Search.."
          className=" 2-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* icon and user */}
      <div className=" flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/message.png"
            alt="message image"
            width={20}
            height={20}
          ></Image>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement image"
            width={20}
            height={20}
          ></Image>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white rounded-full text-xs bg-purple-500 ">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium  text-gray-500">
            sumon ahmed
          </span>
          <span className="text-[10px] text-right text-gray-500">Admin</span>
        </div>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="avatar image"
          width={36}
          height={36}
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
