"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { RiFocus2Line } from "react-icons/ri";

const order = () => {
  const [activeButton, setActiveButton] = useState("history");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="">
      <div className="p-4 border-b-[1px] border-dspGray border-opacity-20">
        <h1 className="font-extrabold text-[20px]">Order List</h1>
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
      <div className="h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
        <div className="p-4">
          <div className="flex flex-col gap-5">
            <div className="px-3 py-3 bg-white rounded-xl">
              <div className="flex flex-col gap-[1px]">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[12px] text-dspGray">
                    Today, 10.50
                  </h2>
                  <h3 className="text-[16px] font-bold">Rp. 15.000</h3>
                </div>
                <h3 className="text-dspGray font-semibold text-[12px] text-end">
                  3,5km
                </h3>
                <div className="flex flex-col gap-5 pb-4 border-b-2 border-dspGray border-opacity-30">
                  <div className="flex gap-3 items-start">
                    <RiFocus2Line className="text-[#47DF00]" size={25} />
                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="font-bold text-base">Mega Mall Center</h3>
                      <p className="font-medium text-sm text-dspGray overflow-hidden text-ellipsis whitespace-nowrap max-w-[250px]">
                        Jl. Cik Ditiro, Batam
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <RiFocus2Line className="text-[#FC5E42]" size={25} />
                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="font-bold text-base">Rusunawa Kabil</h3>
                      <p className="font-medium text-sm text-dspGray overflow-hidden text-ellipsis whitespace-nowrap max-w-[250px]">
                        Kabil, Batam, Riau
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <Button className="text-white rounded-xl bg-dspDarkGreen border-2 border-dspLightGray">
                    Accept
                  </Button>
                  <Button className="text-white rounded-xl bg-red-600 border-2 border-dspLightGray">
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <h2 className="text-center text-xl h-[120px] flex items-center justify-center text-dspGray font-bold">
          You haven't ordered at all
        </h2> */}
        </div>
      </div>
    </div>
  );
};

export default order;
