import Link from "next/link";
import { DetailsContext } from "../context/DetailsContext";
import React, { useContext } from "react";

const Header = () => {
  const { connectWallet, account } =
    useContext(DetailsContext);

  return (
    <header className="[backdrop-filter:blur(8px)] box-border flex items-center justify-center py-[22px] px-20 sticky w-full top-[0] z-[2] border-b-[1px] border-solid border-aliceblue lg:px-10 md:px-6">
      <header className="flex-1 flex items-center justify-between text-center text-14xl font-inter">
        <Link
          className="cursor-pointer [text-decoration:none] text-[inherit]"
          href="/"
        >
          <div className="w-[207px] flex items-center justify-center gap-[8px]">
            <img
              className="max-h-full w-[46px] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
            <div className="font-normal">Cryptico</div>
          </div>
        </Link>
        <div className="flex items-center justify-end gap-[36px] text-xl sm:flex">
          <div className="flex items-center justify-center gap-[30px] lg:hidden">
            <Link
              className="cursor-pointer [text-decoration:none] text-[inherit]"
              href="/about"
            >
              ABOUT
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] text-[inherit]"
              href="/contact"
            >
              CONTACT
            </Link>
            {!account ? (
              <button className="cursor-pointer py-[15px] px-5 bg-[transparent] rounded-lg border-[1px] border-solid border-darkslategray-100 text-lg font-inter text-text-color text-center hover:bg-hover" onClick={connectWallet}>
                LOGIN
              </button>
            ) : null}
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden items-center justify-center lg:flex">
            <img
              className="w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </header>
    </header>
  );
};

export default Header;
