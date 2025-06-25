import { useState } from "react";
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "johnanthonysolana7@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full h-full bg-neutral/10 rounded-2xl flex flex-col items-center text-center p-4 justify-center gap-8">
      <div className="flex flex-col items-center text-center">
        <RiVipCrown2Fill className="text-5xl text-secondary" />
        <h2 className="mt-4 text-xl font-bold font-secondary">Let's Work Together</h2>
        <p className="mt-2">Reach out and let’s build something that stands out.</p>
      </div>

      {/* Email Button with mailto */}
      <a href="mailto:johnanthonysolana7@gmail.com" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary btn-wide">
          <MdEmail size={24} className="mr-2" />
          Email Me
        </button>
      </a>

      {/* Copy-to-clipboard fallback */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <button onClick={handleCopy} className="text-sm underline text-primary hover:text-secondary transition">
          {copied ? "Copied to clipboard!" : "Or click here to copy my email"}
        </button>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </footer>
  );
}

export default Footer;
