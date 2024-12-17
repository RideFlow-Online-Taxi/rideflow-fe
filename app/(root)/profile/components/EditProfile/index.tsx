import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiPencilFill } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditProfile: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-dspDarkBlue w-fit self-end p-1 rounded-lg text-white text-xl">
        <RiPencilFill />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full flex justify-center"
      >
        <SheetHeader className="max-w-lg w-full flex flex-col gap-16">
          <SheetTitle className="flex justify-between ml-7 -mt-1">
            <p>Edit Profile</p>
            <button className="text-sm bg-dspOrange hover:bg-orange-600 py-1 px-5 border-2 border-white rounded-full text-white shadow-lg">Save</button>
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-7 items-start  w-full">
            <div className="font-semibold flex flex-col gap-2">
              <h4 className="text-left text-sm">Profile Photo</h4>
              <div className="flex items-center text-xs gap-2 text-gray-400">
                <div>
                  {/* image */}
                  <div className="w-20 h-20 bg-gray-400 rounded-full mb-2"></div>
                  <button>Change</button>
                </div>
                <p>Choose photo that can be seen by all people.</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full font-semibold">
              <label htmlFor="name" className="text-xs">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
                className="border-b-2 w-full border-dspLightGray text-sm outline-none focus:border-dspGray"
              />
            </div>
            <div className="flex flex-col gap-1 items-start w-full font-semibold">
              <label htmlFor="phoneNumber" className="text-xs">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center w-full gap-2">
                <Select>
                  <SelectTrigger className="w-fit whitespace-nowrap bg-gray-300 rounded-2xl text-[10px] font-bold">
                    <SelectValue placeholder="+ .." />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectGroup>
                      <SelectLabel>Country Code</SelectLabel>
                      <SelectItem value="apple">🇮🇩  {" "} +62</SelectItem>
                      <SelectItem value="banana">🇸🇬  {" "} +65</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="8912 xxxx xxxx"
                  className="border-b-2 w-full border-dspLightGray text-sm outline-none focus:border-dspGray"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full font-semibold">
              <label htmlFor="email" className="text-xs">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email..."
                className="border-b-2 w-full border-dspLightGray text-sm outline-none focus:border-dspGray"
              />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfile;
