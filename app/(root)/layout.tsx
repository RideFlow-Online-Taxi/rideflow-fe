import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
          <div className="flex flex-col items-center w-full">
            {children}
            {/* <Navbar /> */}
          </div>
      </div>
    );
  }