import SearchIcon from '@mui/icons-material/Search'

export default function Header() {
    return (
      // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <>
      <div id="header" className="flex flex-row items-center justify-between h-[30rem]">
           {/* w-full */}
          <div>
            {/* <SearchIcon color="primary" fontSize="large" className='bg-red-700'/> */}
            <img src="./light.svg" alt="light.svg" />
          </div>
          <p className="text-[24rem] font-bold">Header</p>
      </div>
      <hr className="mb-[16rem]"/>
      </>
    );
  }