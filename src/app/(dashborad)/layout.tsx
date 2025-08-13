import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* DashboardLayout    */}
      {/* left */}
      <div className="w-[14%] md:w-'[8%] lg:w-[16%] xl:w-[14%] bg-white">
        <Link
          href="/"
          className="flex p-2  gap-2 items-center justify-center lg:justify-start"
        >
          <Image src="/SM logo.png" alt="logo" width={32} height={32}  />
          <span className="hidden md:block lg:block text-gray-600 font-bold"> IGHS</span>
        </Link>
        <Menu></Menu>
      </div>
      {/* right  */}
      <div className="w-[86%] md:w-'[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar></Navbar>
        {children}
      </div>
      {/* {children} */}
    </div>
  );
}
