import React, { useState } from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const NavThemeToggle = () => {
  const [theme, setTheme] = useState("Color Theme");
  useEffect(() => {}, [setTheme]);
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="flex justify-center">
      <ul class="menu menu-horizontal   p-0">
        <label className="swap mt-0 lg:mt-1 swap-rotate">
          <input className="hidden" type="checkbox" />

          <svg
            className="swap-on fill-current w-10 h-10 p-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-set-theme="halloween"
            data-act-class="ACTIVECLASS"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current w-10 h-10 p-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-set-theme="corporate"
            data-act-class="ACTIVECLASS"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <li
          className="w-44 hidden md:absolute md:right-20 z-20"
          data-choose-theme
          tabindex="0"
        >
          <a className="w-full flex justify-between">
            <a>{theme}</a>
            <svg
              className="fill-current bg-base-300 lg:rounded-full  lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul data-choose-theme className="w-full   p-2 bg-base-200">
            <li>
              <a
                data-set-theme=""
                onClick={() => setTheme("System Default")}
                data-act-class="ACTIVECLASS"
              >
                System Default
              </a>
            </li>
            <li>
              <a
                data-set-theme="dark"
                onClick={() => setTheme("Dark")}
                //onClick swapTheme class swap-off
                data-act-class="ACTIVECLASS"
              >
                Dark
              </a>
            </li>
            <li>
              <a
                data-set-theme="light"
                onClick={() => setTheme("Light")}
                data-act-class="ACTIVECLASS"
              >
                Light
              </a>
            </li>
            <li>
              <a
                data-set-theme="retro"
                onClick={() => setTheme("Retro")}
                data-act-class="ACTIVECLASS"
              >
                Retro
              </a>
            </li>
            <li>
              <a
                data-set-theme="halloween"
                onClick={() => setTheme("Halloween")}
                data-act-class="ACTIVECLASS"
              >
                Halloween
              </a>
            </li>
            <li>
              <a
                data-set-theme="cyberpunk"
                onClick={() => setTheme("Cyberpunk")}
                data-act-class="ACTIVECLASS"
              >
                Cyberpunk
              </a>
            </li>
            <li>
              <a
                data-set-theme="luxury"
                onClick={() => setTheme("Luxury")}
                data-act-class="ACTIVECLASS"
              >
                Luxury
              </a>
            </li>
            <li>
              <a
                data-set-theme="synthwave"
                onClick={() => setTheme("Synthwave")}
                data-act-class="ACTIVECLASS"
              >
                Synth
              </a>
            </li>
            <li>
              <a
                data-set-theme="autumn"
                onClick={() => setTheme("Autumn")}
                data-act-class="ACTIVECLASS"
              >
                Autumn
              </a>
            </li>
            <li>
              <a
                data-set-theme="lemonade"
                onClick={() => setTheme("Lemonade")}
                data-act-class="ACTIVECLASS"
              >
                Lemonade
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavThemeToggle;
