import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header
      className="absolute left-0 right-0 top-0 z-50 w-full py-6 hidden lg:block"
      data-aos="fade-down"
    >
      <div className="container mx-auto flex items-center justify-between gap-x-10">
        {/* Logo Section */}
        <div className="flex-none">
          <a href="/">
            <img
              alt="techlab brand logo"
              width="149"
              height="60"
              className="hidden dark:block"
              src="/path/to/logo-dark.png"
            />
            <img
              alt="techlab brand logo"
              width="149"
              height="60"
              className="block dark:hidden"
              src="/path/to/logo-light.png"
            />
          </a>
        </div>

        {/* Navigation Section */}
        <nav>
          <ul className="flex items-center gap-x-6">
            <li className="group relative">
              <span className="menu-link group-hover:text-primary text-accent-900 dark:text-white py-4 cursor-pointer flex items-center gap-1">
                Home
                <svg
                  className="text-[10px]"
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </span>
              <nav
                aria-label="submenu-items"
                className="absolute left-0 top-full z-40 w-56 bg-accent-700 shadow-lg scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
              >
                <ul className="divide-y divide-white/5">
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-white hover:bg-primary"
                    >
                      Home One
                    </a>
                  </li>
                  <li>
                    <a
                      href="/home-2"
                      className="block px-4 py-2 text-white hover:bg-primary"
                    >
                      Home Two
                    </a>
                  </li>
                </ul>
              </nav>
            </li>

            <li>
              <a
                href="/about"
                className="menu-link group-hover:text-primary text-accent-900 dark:text-white py-4"
              >
                About
              </a>
            </li>

            <li className="group relative">
              <span className="menu-link group-hover:text-primary text-accent-900 dark:text-white py-4 cursor-pointer flex items-center gap-1">
                Service
                <svg
                  className="text-[10px]"
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </span>
              <nav
                aria-label="submenu-items"
                className="absolute left-0 top-full z-40 w-56 bg-accent-700 shadow-lg scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
              >
                <ul className="divide-y divide-white/5">
                  <li>
                    <a
                      href="/services"
                      className="block px-4 py-2 text-white hover:bg-primary"
                    >
                      Service List
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/single"
                      className="block px-4 py-2 text-white hover:bg-primary"
                    >
                      Service Single
                    </a>
                  </li>
                </ul>
              </nav>
            </li>

            {/* Add similar structure for Project, Blog, and other menu items */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
