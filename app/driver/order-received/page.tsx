
'use client';
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { CgPhone } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { RiFocus2Fill } from "react-icons/ri";

const orderReceived = () => {
  const buttonStyle =
    "bg-dspLightOrange text-dspBlack rounded-full border-2 border-dspOrange hover:scale-105 transition-all font-bold";

    const slideUp = {
      hidden: { y: "100%", opacity: 0 },
      visible: { y: 0, opacity: 1 },
      exit: { y: "100%", opacity: 0 },
    };

  return (
    <div className="flex flex-col items-center">
      <div className="min-h-screen w-screen bg-dspGray"></div>

      <AnimatePresence>
        <motion.div
          key="set-location"
          className="w-full flex flex-col gap-5 absolute bottom-0 max-w-lg"
          variants={slideUp}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex  items-center w-full px-3 mb-10">
            <Link href="/" className={` ${buttonStyle} p-2 text-xl`}>
              <FaArrowLeft />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 -translate-y-3/4 px-2 w-full">
              <div className="bg-dspOrange h-14 w-full rounded-t-lg flex items-center justify-center">
                <h1 className="text-base font-bold text-white">On the way</h1>
              </div>
            </div>
            <div className="z-10 relative bg-white rounded-t-xl p-3 flex flex-col w-full gap-3">
              <div className="flex items-center justify-between p-3 border-b-2 border-[#C6C6C6]">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#FFF3E7]"></div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-sm">Susilo Bagas</h1>
                    <h2 className="font-bold text-lg">Rp 15.000</h2>
                  </div>
                </div>
                <div className="rounded-full p-2 bg-[#FFF3E7] border-2 border-[#FEDEBE]">
                  <CgPhone className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col p-5 gap-5">
                <div className="flex items-center gap-3">
                  <RiFocus2Fill className="text-3xl text-green-400" />
                  <div className="flex-flex-col gap-[6px]">
                    <p className="font-bold text-sm text-dspGray">
                      Lokasi Jemput
                    </p>
                    <p className="font-bold">
                      Jl Sudirman 41, Bandar Lampung, Lampung
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 relative">
                  <div className="w-[1px] bg-black h-[80px] text-black absolute left-[15px]  border-dashed border-[1px]"></div>
                  <div className="w-7"></div>
                  <div className="flex-flex-col gap-[6px]">
                    <p className="font-bold text-sm text-dspGray">4,8 km</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <RiFocus2Fill className="text-3xl text-orange-600" />
                  <div className="flex-flex-col gap-[6px]">
                    <p className="font-bold text-sm text-dspGray">
                      Lokasi Tujuan
                    </p>
                    <p className="font-bold">Stadion Pahoman, Bandar Lampung</p>
                  </div>
                </div>

                <Button className="bg-[#FF0000] text-white font-semibold text-sm border-2 border-white rounded-2xl w-full shadow-md py-5">
                  Cancel Order
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default orderReceived;
