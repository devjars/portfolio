import type { testimony } from '../assets/data'

type props = testimony & {
    index : number
}

function TestimonyCard({name,image,relation,date,message, index} : props) {
  return (
     <div
              key={index}
              className={` bg-neutral/5 rounded-2xl border border-neutral/10 ${index % 2 === 0 ? "xs:mr-4 mr-8" : "xs:ml-4 ml-8"}` }
            >
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-3 p-1">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className=" font-bold xs:text-xs s:text-sm">{name}</h2>
                    <p className="text-xs">{relation}</p>
                  </div>
                </div>
                <p className="text-sm xs:text-xs">{date}</p>
              </div>
              <hr className="text-neutral/10" />
              <div className="p-3 text-sm">
                <p>{message}</p>
              </div>
            </div>

  )
}

export default TestimonyCard
