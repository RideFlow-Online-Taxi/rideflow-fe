import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiArrowRightSLine, RiMoneyEuroCircleFill } from "react-icons/ri";
import { HiFilter } from "react-icons/hi";

const Earning: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="font-semibold text-lg w-full flex items-center justify-between px-3">
        <span className="flex items-center gap-3">
          <div className="text-2xl bg-dspOrange p-1 rounded-lg">
            <RiMoneyEuroCircleFill />
          </div>
          Earning
        </span>{" "}
        <RiArrowRightSLine className="text-xl" />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full flex justify-center min-h-screen"
      >
        <SheetHeader className="max-w-lg w-full flex flex-col gap-16">
          <SheetTitle className="flex justify-between ml-7 -mt-1">
            <p>Earning</p>
            <button className="bg-dspOrange hover:bg-orange-600 p-1 border-2 border-white text-dspDarkBlue shadow-lg text-2xl">
              <HiFilter />
            </button>
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-7 items-start  w-full">
            <div className="flex items-center justify-between w-full gap-5">
                <div className="w-full shadow-softShadow rounded-xl p-3 text-left">
                    <h3 className="font-bold">Total Disctance</h3>
                    <p className="font-semibold text-lg text-dspGray">70 KM</p>
                </div>
                <div className="w-full shadow-softShadow rounded-xl p-3 text-left">
                    <h3 className="font-bold">Total Customer</h3>
                    <p className="font-semibold text-lg text-dspGray">1809</p>
                </div>
            </div>
            <div className="flex flex-col items-start w-full shadow-softShadow p-3 gap-5 rounded-xl">
                <h3 className="font-bold">Total Profit</h3>
                <p className="font-semibold text-[28px] text-dspGray self-center mb-16">Rp 180.000.000</p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Earning;