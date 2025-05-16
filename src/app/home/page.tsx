import Image from "next/image";
import ShopCollection from "@/components/ShopCollection";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] place-content-center ">
      <main className="flex flex-col gap-[32px] row-start-2 place-items-start  ">
        <div className="text-black  font-bold text-5xl"> PAST.PRESENT.FUTURE</div>
        <div className="flex  col-span-2  justify-between flex-row ">
         <h1 className="text-black font-light  max-w-md ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum
          <ShopCollection></ShopCollection>
        </h1>
        
        <div>
          <Image src="/img/Car.png" alt="Car" width={700} height={500} />
        </div>
         
        </div>
        

      </main>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
