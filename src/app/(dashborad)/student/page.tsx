import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalender from "@/components/EventCalender";

const StudentPage = () => {
  return (
    <div className=" p-4 flex gap-4 flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold text-gray-400">Schedule</h1>
          <BigCalendar></BigCalendar>
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
        <EventCalender></EventCalender>
        <Announcement></Announcement>
      </div>
    </div>
  );
};

export default StudentPage;
