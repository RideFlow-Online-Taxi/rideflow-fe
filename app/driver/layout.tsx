import NavbarDriver from "@/components/NavbarDriver";

export default function DriverLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div className="flex flex-col items-center w-full">
          {children}
          {/* <NavbarDriver /> */}
        </div>
      </div>
    );
  }