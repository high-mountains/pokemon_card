export default function Header() {
    return (
      // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div id="header" className="flex flex-row items-center justify-between h-[30rem]">
           {/* w-full */}
          <p>Here is Header</p>
          <div className=" bg-teal-900">
            <img src="./light.svg" alt="light.svg" />
          </div>
      </div>
    );
  }