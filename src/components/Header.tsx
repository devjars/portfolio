import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { FcDownload } from "react-icons/fc";
type TypewriterProps = {
  words: string[];
  speed?: number;
  loop?: boolean;
};

function Typewriter({ words, speed = 150, loop = true }: TypewriterProps) {
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
    <header className="w-full flex   gap-4 flex-row">
      <div className="w-[100%] flex justify-center xl:w-[45%]">
        <img
          src={profile}
          alt="john anthony solana profile"
          className="w-full rounded-2xl max-w-[400px] max-h-[400px]  "
        />
      </div>
      <div className="w-full  flex flex-col justify-center items-start   relative  ">
              <a
        href="/resume.pdf"
        download
        className="btn btn-primary btn-xs absolute top-0 right-0 s:btn-sm "
      >
          Resume
          <FcDownload/>
      </a>

       
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
