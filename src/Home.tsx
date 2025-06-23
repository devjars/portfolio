import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function Home() {
 
  return (

 <main className=" w-full   flex justify-center items-center bg-neutral/10 p-3 md:gap-4  ">

      <div className='w-full h-full grid  justify-items-center gap-4 grid-cols-1  md:grid-cols-2 md:gap-2  lg:max-w-[1024px]
        xl:max-h-[800px] xl:flex xl:max-w-[1440px]'>
          <Section1/>
          <Section2/>
          <Section3/>

      </div>
    </main> 
  );
}

export default Home;
