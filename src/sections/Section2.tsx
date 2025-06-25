import Badge from "../components/Badge"
import Header from "../components/Header"
import Stack from "../components/Stack"
import Status from "../components/Status"
import { FaWhatsapp,FaViber  } from "react-icons/fa";


function Section2() {
  return (
  <section className=" row-start-1 w-full max-w-[500px] xl:w-[30%] flex flex-col justify-between gap-4 xl:gap-2   ">
    <div className="w-full bg-neutral/10   rounded-2xl  flex-1  flex flex-col gap-4   p-2  ">
      <Header/>
      <Badge/>
      <div className="w-full grid grid-cols-2 gap-2">
  <a
    href="https://wa.me/639554368437"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <button className="btn text-xs s:btn-lg s:text-sm btn-primary tracking-tight w-full">
      <FaWhatsapp /> WhatsApp me
    </button>
  </a>

  <a
    href="viber://chat?number=%2B639554368437"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <button className="btn text-xs s:btn-lg s:text-sm btn-primary w-full">
      <FaViber /> Viber me
    </button>
  </a>
</div>

      
    </div>
    <div className="w-full h-full  xl:h-[20%]    ">
      <Status/>
    </div>
    <div className="w-full xl:h-[35%]  ">
      <Stack/>
    </div>
  </section>
  )
}

export default Section2
