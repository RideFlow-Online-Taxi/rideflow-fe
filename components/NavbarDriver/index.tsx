"use client";

import { usePathname } from "next/navigation";
import { RiHome2Line, RiAccountPinCircleLine } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import Link from "next/link";

const NavLink = [
  {
    icon: <RiHome2Line />,
    linkTo: "/driver",
  },
  {
    icon: <IoReceiptOutline />,
    linkTo: "/driver/history",
  },
  {
    icon: <RiAccountPinCircleLine />,
    linkTo: "/driver/profile",
  },
];

const NavbarDriver: React.FC = () => {
  const pathname = usePathname();

  const hiddenRoutes = ["/order-ojek"]; 
  if (hiddenRoutes.includes(pathname)) return null;

  return (
    <div
      className="bg-white z-50 flex items-center justify-around py-1 rounded-full shadow-darkShadow w-[75%] max-w-lg fixed bottom-3"
      id="navbar"
    >
      {NavLink.map((nav, index) => (
        <Link
          href={nav.linkTo}
          key={index}
          className="bg-dspLightOrange text-orange-600 p-2 rounded-full border-2 border-orange-300 text-2xl"
        >
          {nav.icon}
        </Link>
      ))}
    </div>
  );
};

export default NavbarDriver;
