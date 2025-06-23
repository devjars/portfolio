import Footer from "../components/Footer"
import Process from "../components/Process"
import Socials from "../components/Socials"
import Testimonials from "../components/Testimonials"


function Section3() {
  return (
    <section className="w-full flex-1  max-w-[500px] md:col-span-2 md:max-w-full  ">
   

        <div className="w-full flex flex-col  md:flex-row items-start gap-4 xl:hidden">
          <div className="w-full h-full md:w-[50%] flex flex-col gap-4 xl:w-[60%]">
             <Testimonials/>
           
              <Process/>
          
          </div>
          <div className="w-full h-full md:w-[50%] flex flex-col gap-4 xl:w-[40%] ">
                <Socials/>
                 <Footer/>
          </div>
        
       </div>

         <div className="hidden  h-full  xl:grid grid-cols-7 grid-rows-6 gap-2">
          <div className="w-full h-full col-span-4 row-span-3">
                <Testimonials/>
          </div>
          <div className="w-full col-span-3 row-span-3">
                 <Process/>
          </div>
          <div className="w-full  col-span-3 row-span-3  ">
             <Socials/>
            
          
          </div>
          <div className="w-full h-full col-span-4 row-span-3">
            <Footer/>
          </div>
       </div>


       
       

    </section>
  )
}

export default Section3
