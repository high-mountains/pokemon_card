import Image from "next/image";
  
export default function Header() {
    return (
      <>
      <div id="header" className="flex flex-row items-center justify-between h-[30rem]">
          <div>
            <Image src="/light.svg" alt="light.svg" width={100} height={100}/>
          </div>
          <p className="text-[24rem] font-bold">Header</p>
      </div>
      <hr className="mb-[16rem]"/>
      </>
    );
  }