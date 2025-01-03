import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="">
      <div
        className={`h-screen w-full md:h-auto fixed z-[90] transition-all ease-out duration-300 ${
          isOpen ? "bg-[#2729399b]" : ""
        }`}
      >
        <nav className="h-[85px] flex justify-between items-center bg-[#3d405b] text-white fixed right-0 left-0 z-[100]">
          <div className="container flex justify-between items-center">
            <div className="left__section flex cursor-pointer">
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
              {/* using traditional css only */}
              <div
                className="hamburger flex flex-col justify-center w-8 gap-[6px] h-[30px] md:hidden cursor-pointer"
                onClick={handleMenuClick}
              >
                <span className={`${isOpen ? "open" : ""}`}></span>
                <span className={`${isOpen ? "open" : ""}`}></span>
                <span className={`${isOpen ? "open" : ""}`}></span>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`fixed p-4 top-[85px] left-0 bg-[#3d405b] text-white w-full transform-translate ease-out duration-300 md:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="mobile-menu">
            <li>
              <a href="#" className="block py-2 hover:text-[#F2CC8F]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#F2CC8F]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#F2CC8F]">
                Membership
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#F2CC8F]">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#F2CC8F]">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
