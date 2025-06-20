import { features } from "../assets/data";
import Box from "./Box";
import { HiSparkles } from "react-icons/hi";

export default function Features() {
  return (
      <Box label="Features" icon={<HiSparkles/>} title="Built the Right Way">
            <div className="w-full p-2 py-4 text-neutral/80">
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-2 ">
                {features.map((feature,index)=>(
                    <div key={index} className="w-full flex items-center gap-2 bg-base-100 p-2 rounded-xl" >
                        <span className="bg-neutral/5 p-2 rounded-lg">{<feature.icon/>}</span>
                        <p className="font-medium font-secondary text-sm">{feature.text}</p>
                    </div>
                ))}
            </div>
            </div>
      </Box>
  )
}
