import OnePage from "@/components/OnePage";
import Link from "next/link";
import { CgEditBlackPoint } from "react-icons/cg";
import { IoTimeSharp } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import BgGradientOrange from "@/components/BgGradientOrange";
import AddressInputSheet from "./components/AddressInputSheet";

const place = [
  {
    name: "Warung Sate Pak Soleh",
    address: "Jl. Merdeka No. 21, Jakarta Pusat",
  },
  {
    name: "Roti Bakar Cinta",
    address: "Jl. Raya Bogor Km. 12, Depok",
  },
  {
    name: "Cafe Kopi Kita",
    address: "Jl. Dago No. 15, Bandung",
  },
]

export default function Home() {
  return (
    <OnePage className="mb-10">
      <BgGradientOrange />

      {/* Address Choosing */}
      <div className="-mt-[50%] bg-white rounded-t-xl mx-5 p-3 shadow-softShadow flex flex-col gap-3">
        <div className="bg-dspLightGray rounded-xl h-[200px] w-full">
          {/* map */}
        </div>
        <div className="rounded-full p-1 border-4 border-dspLightGray flex gap-2 bg-dspBgColor w-full items-center text-dspGray">
          <CgEditBlackPoint className="text-orange-600 text-3xl" />
          <AddressInputSheet buttonName="Search Location..." TriggerClassName="w-full text-left" />
          <RiSearchLine className="text-3xl mr-3" />
        </div>
        <button className="w-fit p-2 bg-dspBgColor font-semibold border-dspLightGray border-4 rounded-xl flex items-center gap-1"><FaBookmark className="text-orange-600 text-xl" /> Home</button>
      </div>

      {/* Recent Destination */}
      <div className="m-5 bg-white shadow-softShadow">
        {place.map((place, index) => (
          <div className="flex items-center gap-2 p-3 border-b-4 last:border-b-0 cursor-pointer" key={index}>
            <IoTimeSharp className="text-4xl text-dspGray" />
            <div>
              <h2 className="font-semibold">{place.name}</h2>
              <p className="line-clamp-1 text-xs">{place.address}</p>
            </div>
          </div>
        ))}
      </div>
    </OnePage>
  );
}
