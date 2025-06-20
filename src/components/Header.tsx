import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

type TypewriterProps = {
  words: string[];
  speed?: number;
  loop?: boolean;
};

function Typewriter({ words, speed = 100, loop = true }: TypewriterProps) {
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
    <header className="w-full flex flex-col items-center gap-4">
      <div className="w-[100%]">
        <img
          src={profile}
          alt="john anthony solana profile"
          className="w-full rounded-2xl max-w-[400px] max-h-[400px]"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-2 px-4 p-1 bg-neutral/5 shadow rounded-full text-xs s:py-2 s:text-sm">
          <div aria-label="status" className="status status-primary animate-pulse" />
          <p>Available To Work</p>
        </div>
        <h1 className="text-neutral font-semibold font-primary text-2xl mt-2">
          John Anthony Solana
        </h1>
        <p className="text-lg tracking-tight">
          I'm a <Typewriter words={[" Web Developer"]} />
        </p>
      </div>
    </header>
  );
}

export default Header;
