import Card from "@/components/card"
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";

export default function Page() {
  return (
    <>
      <LeftSidebar />
      <div className="mb-[30rem]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <RightSidebar />
    </>
  )
}