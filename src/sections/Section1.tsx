import Features from "../components/Features";
import Projects from "../components/Projects";
import Services from "../components/Services";

function Section1() {


  return (

    <section className=" w-full max-w-[500px] xl:w-[25%] flex flex-col gap-4 xl:gap-2">
       
        <div className="w-full h-[32%]  ">
          <Services/>
        </div>
        <div className="w-full h-[32%] ">
          <Projects/>

        </div>
        <div className="h-full flex-1 ">
          <Features/>
        </div>
    </section>
  );
}

export default Section1;
