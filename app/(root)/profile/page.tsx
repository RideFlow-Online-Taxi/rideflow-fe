import BgGradientOrange from "@/components/BgGradientOrange";
import OnePage from "@/components/OnePage";
import { RiLogoutBoxFill, RiArrowRightSLine } from "react-icons/ri";
import EditProfile from "./components/EditProfile";

const ProfilePage: React.FC = () => {
  return (
    <OnePage className="relative">
      <BgGradientOrange className=" z-0" />
      <div className="absolute top-5 z-10 flex flex-col gap-10 items-center w-full px-5">
        <h3 className="font-bold text-xl">Account</h3>
        <div className="flex flex-col items-center w-[80%]">
            <EditProfile />
          <div className="h-52 w-52 bg-dspGray rounded-full">
            {/* user image */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10  p-3">
        <div className="flex flex-col items-center font-semibold">
          <h3 className="text-[22px]">Hendry Tjahaja SP</h3>
          <p className="text-dspGray text-lg">hendrysurijanto123@gmail.com</p>
          <p className="text-dspGray text-lg">+6281931386119</p>
        </div>
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
    </OnePage>
  );
};

export default ProfilePage;
