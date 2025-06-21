import { useEffect, useContext } from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function Home() {
 
  return (
//     <main className=" w-full  flex justify-center   ">

//       <div className='w-full sm:w-[90%] grid justify-items-center grid-cols-1 gap-4
//        md:w-full md:grid-cols-2  lg:w-[95%] xl:w-full xl:grid-cols-3 
//       '>
//  <Section1 />
//    <Section2 />
//     <Section3 />
//       </div>
      
     
//     </main>
//  <main className=" w-full  flex justify-center   ">

//       <div className='w-full grid gap-4 grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-7
//      max-w-[1020px] xl:max-w-full xl:gap-2 xl:max-h-[100vh] xl:overflow-hidden '>
//       <Section2 />
//  <Section1 />
   
//     <Section3 />
//       </div>
      
     
//     </main>
 <main className=" w-full  flex justify-center   ">

      <div className='w-full grid gap-4 grid-cols-1 justify-items-center md:grid-cols-2 xl:flex
     max-w-[800px] xl:max-w-screen md:gap-2  xl:overflow-hidden '>
      <Section2 />
 <Section1 />
   
    <Section3 />
      </div>
      
     
    </main>
  );
}

export default Home;
