import  { motion }  from "framer-motion"
import { testimonies } from "../assets/data";
import { MdReviews } from "react-icons/md";
import Box from "./Box";
import TestimonyCard from "./TestimonyCard";

const duplicatedList = [...testimonies, ...testimonies]; // for seamless loop

function Testimonials() {
  return (
    <Box
      label="Testimonials"
      icon={<MdReviews />}
      title="Words from Peers and Professionals"
    >
      <div className="overflow-hidden h-[40vh] relative xs:px-2 s:px-4 border-t border-neutral/10 md:h-[20vh]  ">
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedList.map((testimony,index) => (
           <TestimonyCard 
           index={index}
           name={testimony.name}
            image={testimony.image} 
            relation={testimony.relation} 
            date={testimony.date}
             message={testimony.message}
              />
          ))}
        </motion.div>
      </div>
    </Box>
  );
}

export default Testimonials;
