import Features from "../components/Features"
import Projects from "../components/Projects"
import Services from "../components/Services"

function Section2() {
  return (
    <section className="w-full rounded-2xl gap-4 flex flex-col max-w-[500px] md:gap-2
    xl:w-[25%]   ">
      <article className="w-full">
        <Projects/>
      </article>
      
      <article className="w-full">
        <Services/>
      </article>
       <article className="w-full">
       <Features/>
      </article>
     
      
      
    </section>
  )
}

export default Section2
