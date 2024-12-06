import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="">
      <div
        className={`w-full h-screen fixed z-[90] transition-all ease-out duration-300 ${
          isOpen ? "bg-[#2729399b]" : ""
        }`}
      >
        <nav className="container flex justify-between items-center h-[85px] bg-[#3d405b] text-white fixed z-[100]">
          <div className="left__section flex">
            <img
              src="/public/logo.png"
              alt="logo"
              width={48}
              className="invert"
            />
            <div className="pl-2">
              <h1 className="text-xl">Tiya</h1>
              <p className="text-xs text-nowrap">GOLF CLUB</p>
            </div>
          </div>
          <div className="right__section flex items-center text-lg">
            <ul className="desktop-menu hidden mr-4 md:flex md:gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>

            <button type="button" className="btn-gold mr-4">
              Member Login
            </button>
            <div
              className="hamburger flex flex-col justify-center w-8 gap-[6px] h-[30px] md:hidden"
              onClick={handleMenuClick}
            >
              <span className="block bg-white h-[2.5px]"></span>
              <span className="block bg-white h-[2.5px]"></span>
              <span className="block bg-white h-[2.5px]"></span>
            </div>
          </div>
        </nav>
        <div
          className={`fixed p-4 top-[85px] left-0 bg-[#3d405b] text-white w-full transform-translate ease-out duration-300 z-[95] ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="mobile-menu">
            <li className="py-2 hover:text-[#F2CC8F]">
              <a href="#">Home</a>
            </li>
            <li className="py-2 hover:text-[#F2CC8F]">
              <a href="#">About</a>
            </li>
            <li className="py-2 hover:text-[#F2CC8F]">
              <a href="#">Membership</a>
            </li>
            <li className="py-2 hover:text-[#F2CC8F]">
              <a href="#">Events</a>
            </li>
            <li className="py-2 hover:text-[#F2CC8F]">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
