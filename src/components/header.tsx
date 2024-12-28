import Image from "next/image";
  
export default function Header() {
    return (
      <>
      <div id="header" className="flex flex-row items-center justify-between h-[50rem]">
          <div>
            <Image src="/pokemon.png" alt="pokemon.png" width={40} height={40}/>
          </div>
          <p className="text-[24rem] font-bold">Pokemon</p>
      </div>
      <hr className="mb-[16rem]"/>
      </>
    );
  }