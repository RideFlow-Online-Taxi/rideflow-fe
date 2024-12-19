import React from 'react'
import driverPic from '@/public/driver.png'
import Image from 'next/image'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';

const verify = () => {
  return (
    <div className="px-10 py-2">
      <div className="py-10 justify-center justify-items-center w-full">
        <Image src={driverPic} alt="logo" className=' w-96 h-96 object-contain' />
      </div>
      <div className="text-center flex justify-center flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[22px]">Input your OTP</h1>
          <p className="font-normal text-sm text-dspGray px-8">
            Please enter the verification code we sent to your mobile **** ****
            **90{" "}
          </p>
        </div>
        <InputOTP maxLength={5}>
          <InputOTPGroup className='gap-6 w-full justify-center'>
            <InputOTPSlot index={0} className='rounded-full bg-dspLightGray w-16 h-16 first:rounded-full' />
            <InputOTPSlot index={1} className='rounded-full bg-dspLightGray w-16 h-16' />
            <InputOTPSlot index={2} className='rounded-full bg-dspLightGray w-16 h-16' />
            <InputOTPSlot index={3} className='rounded-full bg-dspLightGray w-16 h-16 last:rounded-full' />
          </InputOTPGroup>
        </InputOTP>
        <Button className='bg-dspOrange text-white font-semibold text-sm border-2 border-white rounded-2xl shadow-md py-5'>Verify</Button>
      </div>
    </div>
  );
}

export default verify