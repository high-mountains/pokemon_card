import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
