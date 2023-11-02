import Link from "next/link";

const Footer = () => {
  return (
    <div className="self-stretch flex items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
      <footer className="flex-1 flex items-center justify-between text-center text-14xl text-text-color font-inter md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="w-[207px] flex items-center justify-center gap-[8px]">
          <img
            className="self-stretch max-h-full w-[46px] object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <div className="font-normal">Cryptico</div>
        </div>
        <div className="w-full max-w-[500px] flex items-start justify-between text-left text-5xl font-body-regular-400 sm:flex-col sm:gap-[43px] sm:items-start sm:justify-start">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="font-semibold">Features</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
            <Link
                className="cursor-pointer [text-decoration:none] text-[inherit]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] text-[inherit]"
                href="/contact"
              >
                Become a Host
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] text-[inherit]"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
            <div className="font-semibold">Company</div>
            <div className="self-stretch flex flex-col items-start justify-start text-base gap-[16px]">
              <Link
                className="cursor-pointer [text-decoration:none] text-[inherit]"
                href="/about"
              >
                About
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] text-[inherit]"
                href="https://shubhamparkhi.vercel.app/"
              >
                Developer
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
