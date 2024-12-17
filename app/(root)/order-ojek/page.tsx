"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 
import LocationInput from "../components/LocationInput";
import { FaArrowLeft, FaArrowRight, FaBookmark, FaUser } from "react-icons/fa6";
import { TbFocus2, TbPointFilled } from "react-icons/tb";
import { RiFocus2Fill, RiArrowRightSLine } from "react-icons/ri";
import AddressInputSheet from "../components/AddressInputSheet";
import Image from "next/image";
import { vehicleOptions } from "@/data/data";
import PaymentMethod from "./components/PaymentMethod";

const OrderOjek: React.FC = () => {
  const [showChooseVehicle, setShowChooseVehicle] = useState(false); // State for toggling components

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
      <div className="absolute top-0 w-full max-w-lg p-5">
        <LocationInput />
      </div>

      {/* AnimatePresence to handle conditional rendering with animations */}
      <AnimatePresence>
        {!showChooseVehicle && (
          <motion.div
            key="set-location"
            className="w-full flex flex-col gap-5 absolute bottom-0 max-w-lg"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center w-full px-3">
              {/* Button back to homepage */}
              <Link href="/" className={` ${buttonStyle} p-2 text-xl`}>
                <FaArrowLeft />
              </Link>
              <button className={` ${buttonStyle} p-1 text-3xl`}>
                <TbFocus2 />
              </button>
            </div>
            <div className="bg-white rounded-t-xl p-3 flex flex-col w-full gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg">Set Location</h3>
                <AddressInputSheet
                  buttonName="Edit"
                  TriggerClassName="font-bold bg-dspLightOrange text-orange-600 border border-orange-600 py-1 px-5 rounded-2xl hover:bg-orange-600 hover:text-dspLightOrange"
                />
              </div>
              <div className="flex items-center justify-between border border-dspGray rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <RiFocus2Fill className="text-3xl text-orange-600" />
                  <p className="font-bold ">
                    Jl Sudirman 41, Bandar Lampung, Lampung
                  </p>
                </div>
                <button className="text-2xl text-dspGray">
                  <FaBookmark />
                </button>
              </div>
              {/* Button to open Choose Vehicle and hide Set Location */}
              <button
                className="bg-dspOrange p-2 shadow-darkShadow rounded-xl text-white border-2 border-white  hover:bg-orange-600"
                onClick={() => setShowChooseVehicle(true)}
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChooseVehicle && (
          <motion.div
            key="choose-vehicle"
            className="w-full flex flex-col gap-5 absolute bottom-0 max-w-lg z-10"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center w-full px-3">
              {/* Close Choose Vehicle and show Set Location */}
              <button
                className={` ${buttonStyle} p-2 text-xl`}
                onClick={() => setShowChooseVehicle(false)}
              >
                <FaArrowLeft />
              </button>
            </div>
            <div className="bg-white rounded-t-xl flex flex-col w-full gap-3">
              <div className="p-3 my-5 flex flex-col gap-3">
                {vehicleOptions.map((vehicle, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between p-3 border-2 border-dspLightGray rounded-2xl hover:bg-dspBgColor"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={vehicle.icon}
                        alt={vehicle.name}
                        width={52}
                        height={45}
                        className=""
                      />
                      <div className="flex flex-col items-start">
                        <h4 className="font-bold">{vehicle.name}</h4>
                        <p className="flex items-center gap-1 text-xs text-dspGray">
                          {vehicle.time} <TbPointFilled /> <FaUser />{" "}
                          {vehicle.passangerSeat}{" "}
                        </p>
                      </div>
                    </div>
                    <p className="text-left text-dspGray font-bold">
                      Rp. {vehicle.price}
                    </p>
                  </button>
                ))}
              </div>
              <div className="shadow-darkShadow p-3 flex flex-col gap-5 items-start mt-5">
                <PaymentMethod />
                <button className="flex items-center justify-between w-full gap-2 text-sm px-5 py-2 bg-dspOrange hover:bg-orange-600 text-white rounded-2xl shadow-darkShadow border-2 border-white">
                  Search for regular bike
                  <div className="flex items-center gap-2">
                    Rp. 17.000
                    <span className="bg-white text-dspOrange p-1 rounded-full">
                      <FaArrowRight />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderOjek;