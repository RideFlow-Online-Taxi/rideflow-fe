import bike from "@/public/bike.svg";
import car from "@/public/car.svg";
import gopay from "@/public/PaymentMethod/gopay.png";
import bca from "@/public/PaymentMethod/bca.png";
import dana from "@/public/PaymentMethod/dana.webp";
import cash from "@/public/cash.svg";

export const vehicleOptions = [
    {
        id: 1,
        name: "Regular Bike",
        price: 17000,
        time: "3 - 7 minutes",
        passangerSeat: "1",
        icon: bike
    },
    {
        id: 2,
        name: "Premium Bike",
        price: 21000,
        time: "3 - 7 minutes",
        passangerSeat: "1 - 2",
        icon: bike
    },
    {
        id: 3,
        name: "Car",
        price: 40000,
        time: "15 - 21 minutes",
        passangerSeat: "4 - 5",
        icon: car
    },
]

export const paymentMethod = [
    {
        id: 1,
        name: "Gopay",
        icon: gopay
    },
    {
        id: 2,
        name: "Dana",
        icon: dana
    },
    {
        id: 3,
        name: "BCA",
        icon: bca
    },
    {
        id: 4,
        name: "Cash",
        icon: cash
    },
]