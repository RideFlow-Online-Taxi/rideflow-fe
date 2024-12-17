'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import driverPic from '@/public/driver.png'
import vehicleLogo from "@/public/vehicle.png"
import Image from 'next/image'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { z } from 'zod'
import InputFileButtonKTP from './_components/InputFileButtonKTP'
import InputFileButtonSTNK from './_components/InputFileButtonSTNK'


const phoneSchema = z.string().refine((phone) => {
  return phone.length > 10 && phone.startsWith('+')
}, {
  message: "Please enter a valid phone number"
})

const UpdatedRegisterForm = () => {
  const [phone, setPhone] = useState('+62')
  const [phoneError, setPhoneError] = useState('')

  const handlePhoneChange = (value:any) => {
    setPhone(value)
    setPhoneError('')
  }

  const handleSubmit = () => {
    try {
      phoneSchema.parse(phone);
      console.log('Valid phone number:', phone)
    } catch (error) {
      if (error instanceof z.ZodError) {
        setPhoneError(error.errors[0].message)
      }
    }
  }

  return (
    <div className="p-10 flex flex-col gap-[52px] items-center">
      <div className="justify-items-center">
        <Image src={vehicleLogo} width={88} height={22} alt="logo" />
      </div>

      <div className="justify-items-center">
        <Image src={driverPic} alt="logo" width={400} height={200} />
      </div>

      <div className="flex flex-col text-center gap-2">
        <h1 className="font-bold text-[22px]">Welcome to XXXXXX!</h1>
        <p className="text-sm font-normal">
          Login or register your number in two steps.
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col gap-1 ">
            <Label htmlFor="name" className="font-semibold text-[12px]">
              Name<span className="text-red-600 pl-1">*</span>
            </Label>
            <Input className="border-t-0 border-l-0 border-r-0 bg-transparent border-dspGray rounded-none focus:border-none focus-visible:ring-2 focus-visible:ring-dspOrange focus-visible:rounded-sm" />
          </div>
          <div className="">
            <Label htmlFor="phoneNumber" className="font-semibold text-[12px]">
              Phone Number<span className="text-red-600 pl-1">*</span>
            </Label>
            <PhoneInput
              country={"id"}
              value={phone}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                height: "44px",
                fontSize: "16px",
                backgroundColor: "transparent",
                marginLeft: "2px",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              containerStyle={{
                width: "100%",
              }}
              placeholder="Enter phone number"
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>
          <div className=" flex flex-col gap-1 ">
            <Label htmlFor="name" className="font-semibold text-[12px]">
              Email<span className="text-red-600 pl-1">*</span>
            </Label>
            <Input
              type="email"
              className="border-t-0 border-l-0 border-r-0 bg-transparent border-dspGray rounded-none focus:border-none focus-visible:ring-2 focus-visible:ring-dspOrange focus-visible:rounded-sm"
            />
          </div>

          <div className=" flex items-center gap-8 ">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="font-semibold text-[12px]">
                Vehicle Type<span className="text-red-600 pl-1">*</span>
              </Label>
              <Input
                type="text"
                className="border-t-0 border-l-0 border-r-0 bg-transparent border-dspGray rounded-none focus:border-none focus-visible:ring-2 focus-visible:ring-dspOrange focus-visible:rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="font-semibold text-[12px]">
                Plat Number<span className="text-red-600 pl-1">*</span>
              </Label>
              <Input
                type="text"
                className="border-t-0 border-l-0 border-r-0 bg-transparent border-dspGray rounded-none focus:border-none focus-visible:ring-2 focus-visible:ring-dspOrange focus-visible:rounded-sm"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-8 ">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="font-semibold text-[12px]">
                KTP<span className="text-red-600 pl-1">*</span>
              </Label>
              <InputFileButtonKTP />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="font-semibold text-[12px]">
                STNK<span className="text-red-600 pl-1">*</span>
              </Label>
              <InputFileButtonSTNK />
            </div>
          </div>
        </div>

        <Button className="bg-dspOrange text-white font-semibold text-sm border-2 border-white rounded-2xl w-full mt-11 shadow-md py-5">
          Login
        </Button>
      </div>
    </div>
  );
}

export default UpdatedRegisterForm;