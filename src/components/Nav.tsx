import { Menu } from "./Menu";
import { useState } from "react";
import logo from "../assets/uc-logo.svg";
import MenuData from "../hooks/MenuData.tsx";

export const Nav = () => {
  const { data, error } = MenuData();
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Ingen information tillgänglig att visa</div>;
  }

  const svg = (
    <svg
      className="-mr-1 h-5 w-5 text-gray-400 self-center"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <nav className="top-0 left-0 bg-pink-700 w-full fixed flex space-between p-8 justify-between items-start z-50">
        <img height="100" width="100" src={logo} alt="logo uc" />
        <div className="flex gap-2 hidden md:flex">
          <div>
            <button
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              type="button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setShowMenu1(!showMenu1)}
            >
              {data.desktopMenu.products.first.title}
              {svg}
            </button>
            {showMenu1 && (
              <>
                <ul
                  className="pt-2"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {data.desktopMenu.products.first.menuItems.map(
                    (item: any) => (
                      <Menu key={item.url} title={item.title} url={item.url} />
                    ),
                  )}
                </ul>
              </>
            )}
          </div>
          <div>
            <button
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              type="button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setShowMenu2(!showMenu2)}
            >
              {data.desktopMenu.products.second.title}
              {svg}
            </button>
            {showMenu2 && (
              <>
                <ul
                  className="pt-2"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {data.desktopMenu.products.second.menuItems.map(
                    (item: any) => (
                      <Menu key={item.url} title={item.title} url={item.url} />
                    ),
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="hidden md:flex p-3 gap-3 text-bold ">
          <a
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white"
            href="#categories"
            target="_self"
            rel="noopener noreferrer"
          >
            {data.desktopMenu.category.title}
          </a>
          <a
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white"
            href="#products"
            target="_self"
            rel="noopener noreferrer"
          >
            {data.desktopMenu.article.title}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
