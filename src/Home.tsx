import { useEffect, useContext } from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function Home() {
 
  return (
    <main className=" w-full  h-screen min-h-screen  grid grid-cols-1 gap-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 mt-2 max-w-notallowed:hidden">
      <section className="w-full">
        <Section1 />
      </section>

     <section className='w-full'>
       <Section2 />
     </section>
      <Section3 />
    </main>
  );
}

export default Home;
