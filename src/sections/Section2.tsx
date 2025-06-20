import Features from "../components/Features"
import Projects from "../components/Projects"
import Services from "../components/Services"

function Section2() {
  return (
    <div className="w-full flex flex-col gap-4">
      <article className="w-full">
        <Projects/>
      </article>
      
      <article className="w-full">
        <Services/>
      </article>
       <article className="w-full">
       <Features/>
      </article>
     
      
      
    </div>
  )
}

export default Section2
