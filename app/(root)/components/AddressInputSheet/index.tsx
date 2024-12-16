import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LocationInput from "../LocationInput";
import { RiRoadMapLine } from "react-icons/ri";
import { IoTimeSharp } from "react-icons/io5";
import Link from "next/link";

interface addressInputSheet {
  buttonName?: string;
  TriggerClassName?: string;
}

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
];

const AddressInputSheet: React.FC<addressInputSheet> = ({
  buttonName,
  TriggerClassName,
}) => {
  return (
    <Sheet className="">
      <SheetTrigger className={` ${TriggerClassName}`}>
        {buttonName}
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="min-h-screen bg-white w-full flex flex-col items-center"
      >
        <SheetHeader className="w-full max-w-lg flex flex-col gap-5">
          <SheetTitle className="text-black font-bold text-left text-xl ml-8 -mt-2">
            Have somewhere to go today?
          </SheetTitle>
          <SheetDescription className="flex flex-col ">
            <div className="flex flex-col w-full gap-3">
              <LocationInput />
              <Link href="/order-ojek" className="flex items-center gap-2 p-2 bg-dspBgColor rounded-xl border-2 border-dspLightGray w-fit text-xs text-dspBlack font-bold">
                <RiRoadMapLine className="text-orange-600 text-base" /> Choose
                map
              </Link>
            </div>
            <hr className="border border-dspGray opacity-80 mt-5" />
            <div className="">
              {place.map((place, index) => (
                <div
                  className="flex items-center gap-4 px-3 py-5 border-b-2 last:border-b-0 border-dspGray cursor-pointer"
                  key={index}
                >
                  <IoTimeSharp className="text-4xl text-dspGray" />
                  <div className="flex flex-col gap-2 text-left text-dspBlack">
                    <h2 className="font-semibold">{place.name}</h2>
                    <p className="line-clamp-1 text-xs">{place.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddressInputSheet;
