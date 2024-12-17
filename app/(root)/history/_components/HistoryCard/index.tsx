"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import vehicleLogo from "@/public/vehicle.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import vehicleHistoryDetailLogo from '@/public/vehicleHistory.png'

const HistoryCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <div className="px-4 py-5 bg-white rounded-xl">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-[12px] text-dspGray">Today, 10.50</h2>
        <div className="flex items-center gap-4 justify-between">
          <Image src={vehicleLogo} alt="logo" width={82} height={112} />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base truncate max-w-[150px]">
              Mega Mall Center
            </h3>
            <p className="font-medium text-sm text-dspGray overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">
              Jl. Cik Ditiro, Batam Maria aku mamama
            </p>
          </div>
          <Button
            className="text-white rounded-2xl bg-dspOrange border-2 border-dspLightGray"
            onClick={openDrawer}
          >
            Detail
          </Button>
        </div>
      </div>
      <Sheet open={isOpen} onOpenChange={() => {}}>
        <SheetTitle></SheetTitle>
        <SheetContent
          side="bottom"
          className="h-screen w-screen max-w-full max-h-full [&>button]:hidden p-0"
          onEscapeKeyDown={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <XIcon
            size={30}
            className="absolute top-3 left-4 z-10"
            onClick={closeDrawer}
          />
          {/* Drawer Content */}
          <div className="bg-gradient-to-b from-[#F5D8AC] to-[#FFAE33] w-full h-1/2  rounded-b-[32px] relative z-0 p-5 ">
            <div className="bg-white shadow-md rounded-xl absolute bottom-[30%] translate-y-3/4 justify-center right-1/2 translate-x-1/2 w-5/6 p-5">
              <div className="flex flex-col justify-center gap-2 border-b-[3px] border-gray-200 border-dashed py-2">
                <div className="justify-items-center">
                  <Image
                    src={vehicleHistoryDetailLogo}
                    alt="logo"
                    width={77}
                    height={77}
                  />
                </div>
                <h1 className="text-[20px] font-bold text-center">
                  Rp. 15.000
                </h1>
                <h2 className="font-medium text-sm text-dspGray text-center">
                  Jl. Cik Ditiro, Batam
                </h2>
              </div>

              <div className="py-4 flex flex-col gap-5 border-b-[3px] border-gray-200 border-dashed">
                <p className="text-base font-bold">Detail Transaction</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-medium text-sm text-dspGray">
                    <p>Status</p>
                    <p>Complete</p>
                  </div>
                  <div className="flex justify-between items-center font-medium text-sm text-dspGray">
                    <p>Payment Method</p>
                    <p>Cash</p>
                  </div>
                  <div className="flex justify-between items-center font-medium text-sm text-dspGray">
                    <p>Time</p>
                    <p>10.50</p>
                  </div>
                  <div className="flex justify-between items-center font-medium text-sm text-dspGray">
                    <p>Date</p>
                    <p>15 Dec 2024</p>
                  </div>
                  <div className="flex justify-between items-center font-medium text-sm text-dspGray">
                    <p>Transaction ID</p>
                    <p>BK-0011-2222-3333</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-black pt-5 pb-2">
                <p className="font-medium">Total</p>
                <p className="font-bold">Rp 15.000</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HistoryCard;
