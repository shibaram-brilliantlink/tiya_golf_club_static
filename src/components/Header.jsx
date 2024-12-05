export default function Header() {
  return (
    <header>
      <div className="bg-[#3d405b] text-white">
        <nav className="container flex justify-between items-center h-[85px] ">
          <div className="left__section flex">
            <img
              src="/public/logo.png"
              alt="logo"
              width={48}
              className="invert"
            />
            <div className="pl-2">
              <h1 className="text-xl">Tiya</h1>
              <p className="text-xs">GOLF CLUB</p>
            </div>
          </div>
          <div className="right__section flex items-center">
            <ul className="hidden mr-4 md:flex md:gap-4 ">
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
            <div className="hamburger flex flex-col justify-center w-8 gap-[6px] h-[30px] md:hidden">
              <span className="block bg-white h-[2.5px]"></span>
              <span className="block bg-white h-[2.5px]"></span>
              <span className="block bg-white h-[2.5px]"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
