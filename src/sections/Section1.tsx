import { FaWhatsapp,FaViber  } from "react-icons/fa";
import Header from "../components/Header";
import Badge from "../components/Badge";
import Status from "../components/Status";
import Stack from "../components/Stack";
function Section1() {


  return (
    <div className='w-full rounded-2xl gap-4 flex flex-col  '>
      <article className="w-full p-2 bg-neutral/5 rounded-xl   flex flex-col items-center xs:gap-2">
         <Header/>
        <Badge/>
        <div className="w-full grid grid-cols-2 gap-2 ">
         <button className="btn btn-active text-xs s:btn-lg s:text-sm bg-primary tracking-tight hover:bg-neutral/50 "> <FaWhatsapp/> WhatsApp me</button>
         <button className="btn btn-active text-xs s:btn-lg s:text-sm bg-primary hover:bg-neutral/50  "> <FaViber/> Viber me</button>
        </div>
      </article>

      <article className="w-full  rounded-2xl flex justify-center  xs:gap-2  ">
          <Status/>
      </article>

    <article className="w-full">
      <Stack/>
    </article>


    </div>
  );
}

export default Section1;
