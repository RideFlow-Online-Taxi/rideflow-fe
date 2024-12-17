"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import HistoryCard from "./_components/HistoryCard";

const history = () => {
  const [activeButton, setActiveButton] = useState("history");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="">
      <div className="p-4 border-b-[1px] border-dspGray border-opacity-20">
        <h1 className="font-extrabold text-[20px]">Ride Activity</h1>
      </div>
      <div className="p-4 flex flex-row items-center gap-5">
        <button
          className={
            activeButton === "history"
              ? "font-bold border-b-2 border-dspOrange"
              : "transition ease-in-out delay-150 text-dspGray font-light relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-dspOrange after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          }
          onClick={() => handleButtonClick("history")}
        >
          History
        </button>
        <button
          className={
            activeButton === "onTheWay"
              ? "font-bold border-b-2 border-dspOrange"
              : "transition ease-in-out delay-150 text-dspGray font-light relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-dspOrange after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          }
          onClick={() => handleButtonClick("onTheWay")}
        >
          On the Way
        </button>
      </div>
      <div className="select px-4 py-2">
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[105px] bg-[#E8E8E8] border-2 border-dspLightGray rounded-2xl font-semibold">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[105px] bg-[#E8E8E8] border-2 border-dspLightGray rounded-2xl font-semibold">
              <SelectValue placeholder="Vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
        <div className="p-4">
          <div className="flex flex-col gap-5">
            <HistoryCard/>
          </div>
          {/* <h2 className="text-center text-xl h-[120px] flex items-center justify-center text-dspGray font-bold">
        You haven't ordered at all
      </h2> */}
        </div>
      </div>
    </div>
  );
};

export default history;
