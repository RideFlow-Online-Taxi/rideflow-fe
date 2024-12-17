import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { paymentMethod } from "@/data/data";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import React from "react";
import cash from "@/public/cash.svg";
import { RiArrowRightSLine } from "react-icons/ri";

const PaymentMethod: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center gap-2 text-sm font-bold">
        <Image 
            src={cash} 
            alt="cash" 
            width={30} 
            height={30} 
            className="" 
        />
        Cash
        <RiArrowRightSLine className="text-lg" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="p-3 text-left">
          <DrawerTitle>Payment Method</DrawerTitle>
          <DrawerDescription>
            Please choose your payment method.
          </DrawerDescription>
          <div className="py-2">
            <RadioGroup defaultValue="Cash" className="flex flex-col gap-3">
              {paymentMethod.map((payment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={payment.icon}
                      alt={payment.name}
                      width={30}
                      height={30}
                      className=""
                    />
                    <Label htmlFor="option-one">{payment.name}</Label>
                  </div>
                  <RadioGroupItem value={payment.name} id="option-one" />
                </div>
              ))}
            </RadioGroup>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default PaymentMethod;
