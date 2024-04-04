import { Link } from "react-router-dom";
import NavList from "./nav-list";

export default function Navbar() {
  return (
    <nav className="bg-white py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
        <h1 className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">
          Simple Header
        </h1>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-[16px] flex items-center gap-2 flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
            <li className="py-3 px-4 bg-blue-500 rounded text-white">
              <NavList NavTitle="Home"></NavList>
            </li>
            <li className="text-[#0D6EFD]">
              <NavList NavTitle="Features"></NavList>
            </li>
            <li className="text-[#0D6EFD]">
              <NavList NavTitle="Pricings"></NavList>
            </li>
            <li className="text-[#0D6EFD]">
              <NavList NavTitle="FAQs"></NavList>
            </li>
            <li className="text-[#0D6EFD]">
              <NavList NavTitle="About"></NavList>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
