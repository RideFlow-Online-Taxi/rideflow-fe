import BgGradientOrange from "@/components/BgGradientOrange";
import OnePage from "@/components/OnePage";
import { RiLogoutBoxFill, RiArrowRightSLine } from "react-icons/ri";
import EditProfileDriver from "./components/EditProfileDriver";
import bike from "@/public/bike.svg";
import Image from "next/image";
import Earning from "./components/Earning";

const ProfileDriver: React.FC = () => {
  return (
    <OnePage className="relative">
      <BgGradientOrange className=" z-0" />
      <div className="absolute top-5 z-10 flex flex-col gap-10 items-center w-full px-5">
        <h3 className="font-bold text-xl">Account</h3>
        <div className="flex flex-col items-center w-[80%]">
          <EditProfileDriver />
          <div className="h-52 w-52 bg-dspGray rounded-full">
            {/* user image */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7  p-3">
        <div className="flex flex-col items-center font-semibold">
          <h3 className="text-[22px]">Hendry Tjahaja SP</h3>
          <p className="text-dspGray text-lg">hendrysurijanto123@gmail.com</p>
          <p className="text-dspGray text-lg">+6281931386119</p>
        </div>
        <div className="flex items-center gap-3 bg-white py-5 px-3 shadow-softShadow rounded-xl">
            <div className="bg-dspLightOrange p-2 border-2 border-dspLightGray rounded-xl ">
              <Image
              src={bike}
              alt="bike"
              />
            </div>
            <div>
              <h4 className="font-bold">Motor Beat Kobo</h4>
              <p className="text-dspGray text-sm">A 8090 SE</p>
            </div>
        </div>
        <div className="flex flex-col gap-2">
          <Earning />
          <button className="font-semibold text-lg w-full flex items-center justify-between px-3">
            {" "}
            <span className="flex items-center gap-3">
              <div className="text-2xl bg-dspOrange p-1 rounded-lg">
                <RiLogoutBoxFill />
              </div>
              Logout
            </span>{" "}
            <RiArrowRightSLine className="text-xl" />
          </button>
        </div>
      </div>
    </OnePage>
  );
};

export default ProfileDriver;
