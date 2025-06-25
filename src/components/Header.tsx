import { useEffect, useState } from "react";
import profile from "../assets/profile.webp";
import { FcDownload } from "react-icons/fc";
type TypewriterProps = {
  words: string[];
  speed?: number;
};

function Typewriter({ words, speed = 150}: TypewriterProps) {
  const [index, setIndex] = useState(0);      // Current word index
  const [subIndex, setSubIndex] = useState(0); // Characters typed
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed]);

  return (
    <span className="text-secondary font-medium">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Header() {
  return (
    <header className="w-full flex   gap-4 flex-row ">
      <div className="w-[100%] flex justify-center xl:w-[45%]">
        <img
          src={profile}
        alt="John Anthony Solana's Profile Picture"
          className="w-full rounded-2xl  max-w-[300px] max-h-[300px]  "
        />
      </div>
      <div className="w-full  flex flex-col justify-center items-start   relative  ">
        
<div className="tooltip tooltip-bottom  absolute top-0 right-0">
  <div className="tooltip-content">
    <div className="animate-bounce text-orange-400 -rotate-10 text-xl font-black">yehey!</div>
  </div>
  <a href="/resume.pdf" download className="btn btn-primary btn-xs s:btn-sm">
    Resume
    <FcDownload />
  </a>
</div>



       
        <h1 className="text-neutral font-black font-primary text-2xl mt-2 min-[450px]:text-4xl">
          Jars.Dev
        </h1>
        <p className="text-xs mt-2 font-medium tracking-tight s:text-base ">
          I'm a <Typewriter words={[" Web Developer"]} />
        </p>
         <div className="flex items-center gap-2 mt-2">
          <div aria-label="status" className="status status-primary animate-pulse" />
          <p className="text-xs">Available To Work</p>
        </div>  
      </div>
    </header>
  );
}

export default Header;
