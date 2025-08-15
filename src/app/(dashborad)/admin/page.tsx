import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UseCard from "@/components/UseCard";

const AdminPage = () => {
  return (
    <div className=" p-4 text-black flex flex-col gap-4 md:flex-row">
      {/* left  */}
      <div className=" w-full lg:w-2/3 flex flex-col gap-8">
        {/* UseCard */}

        <div className="flex gap-4 justify-between flex-wrap ">
          <UseCard type="Teacher"></UseCard>
          <UseCard type="Parent "></UseCard>
          <UseCard type=" Student"></UseCard>
          <UseCard type="Staff "></UseCard>
        </div>

        {/* middle chart  */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/* count chart  */}
          <div className=" w-full lg:w-1/3 h-[450px]">
            <CountChart></CountChart>
          </div>
          {/* attendance  chart  */}
          <div className=" w-full lg:w-2/3 h-[450px]">
            <AttendanceChart></AttendanceChart>
          </div>
        </div>
        {/* bottom  chart  */}
        <div className="w-full h-[500px]">
<FinanceChart></FinanceChart>


        </div>
      </div>
      {/* right  */}
      <div className="w-full lg:w-1/3 ">right</div>
    </div>
  );
};

export default AdminPage;
