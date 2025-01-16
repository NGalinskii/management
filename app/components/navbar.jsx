// @flow strict
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            SMM-агенство
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                О нас
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#service"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Услуги
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#cases"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Кейсы
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#articles"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Статьи
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#contact"
            >
              
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                Оставить заявку
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
