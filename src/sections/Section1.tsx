import { FaWhatsapp,FaViber  } from "react-icons/fa";
import Header from "../components/Header";
import Badge from "../components/Badge";
import Status from "../components/Status";
import Stack from "../components/Stack";
function Section1() {


  return (
    // <section className='w-full rounded-2xl gap-4 flex flex-col max-w-[446px] md:max-w-full '>
    //   <article className="w-full p-2 bg-neutral/5 rounded-xl   flex flex-col items-center xs:gap-2">
    //      <Header/>
    //     <Badge/>
    //     <div className="w-full grid grid-cols-2 gap-2 ">
    //      <button className="btn  text-xs s:btn-lg s:text-sm btn-primary tracking-tight  ">
    //       <FaWhatsapp/> WhatsApp me</button>
    //      <button className="btn  text-xs s:btn-lg s:text-sm btn-primary  "> 
    //      <FaViber/> Viber me</button>
    //     </div>
    //   </article>

    //   <article className="w-full  rounded-2xl flex justify-center  xs:gap-2  ">
    //       <Status/>
    //   </article>

    // <article className="w-full">
    //   <Stack/>
    // </article>


    // </section>
    <section className='w-full   rounded-2xl gap-4 flex flex-col max-w-[500px] md:gap-2
    xl:w-[30%] max-xl:row-start-1 '>
      <article className="w-full p-2 bg-neutral/10   rounded-xl   flex flex-col items-center xs:gap-2">
         <Header/>
        <Badge/>
        <div className="w-full grid grid-cols-2 gap-2 ">
         <button className="btn  text-xs s:btn-lg s:text-sm btn-primary tracking-tight  ">
          <FaWhatsapp/> WhatsApp me</button>
         <button className="btn  text-xs s:btn-lg s:text-sm btn-primary  "> 
         <FaViber/> Viber me</button>
        </div>
      </article>

      <article className="w-full  rounded-2xl flex justify-center  xs:gap-2  ">
          <Status/>
      </article>

    <article className="w-full">
      <Stack/>
    </article>


    </section>
  );
}

export default Section1;
