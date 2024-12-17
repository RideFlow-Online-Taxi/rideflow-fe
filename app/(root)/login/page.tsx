'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { z } from 'zod'
import vehicleLogo from "@/public/vehicle.png"
import driverPic from '@/public/driver.png'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import 'react-phone-input-2/lib/style.css'

const phoneSchema = z.string().refine((phone) => {
  return phone.length > 10 && phone.startsWith('+')
}, {
  message: "Please enter a valid phone number"
})

const Login = () => {
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
        <h1 className='font-bold text-[22px]'>Welcome to XXXXXX!</h1>
        <p className='text-sm font-normal'>Login or register your number in two steps.</p>
      </div>
      
      <div className="w-full max-w-xs">
      <Label htmlFor="phoneNumber" className='font-semibold text-[12px]'>Phone Number<span className='text-red-600 pl-1'>*</span></Label>
        <PhoneInput
          country={'id'}
          value={phone}
          onChange={handlePhoneChange}
          inputStyle={{
            width: '100%',
            height: '44px',
            fontSize: '16px',
            backgroundColor:'transparent',
            marginLeft:"12px",
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            
          }}
          containerStyle={{
            width: '100%',
          }}
          placeholder="Enter phone number"
        />
        {phoneError && (
          <p className="text-red-500 text-xs mt-1">{phoneError}</p>
        )}
        
        <Button className='bg-dspOrange text-white font-semibold text-sm border-2 border-white rounded-2xl w-full mt-11 shadow-md py-5'>Login</Button>
      </div>
    </div>
  )
}

export default Login