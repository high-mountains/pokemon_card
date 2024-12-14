import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          {/* <p className="bg-red-300">Hello, dashboard top layout</p> */}
          <LeftSidebar/>
          {children}
          <RightSidebar/>
        </>
    );
  }
  