import React from "react";
import { Link, NavLink } from "react-router-dom";

function handleClick() {
  const menu = document.getElementById("menu");
  const burger = document.getElementById("burger");

  burger.addEventListener("click", () => {
    console.log(5);
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
}

function Header() {
  return (
    <header className="m-6 flex justify-evenly bg-transparent rounded-md font-serif">
      <nav>
        {/* <div
          className="cursor-pointer grid justify-items-start min-[570px]:hidden"
          id="burger"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div> */}
        <div>
          <ul className="flex gap-8 max-[570px]:grid max-[570px]:gap-3" id="menu">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <NavLink
                to="/"
                className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 
                ${
                  isActive
                    ? "text-teal-400 border-b-2 border-solid border-teal-500"
                    : "text-stone-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`}
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <NavLink
                to="/todolist"
                className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 
                ${
                  isActive
                    ? "text-teal-400 border-b-2 border-solid border-teal-500"
                    : "text-stone-700"
                } flex items-center lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`}
              >
                Todo List
              </NavLink>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
              <NavLink
                to="/planner"
                className={({ isActive }) => `py-2 pr-4 pl-3 duration-200
                ${
                  isActive
                    ? "text-teal-400 border-b-2 border-solid border-teal-500"
                    : "text-stone-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`}
              >
                Planner
              </NavLink>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <NavLink
                to="/promodo"
                className={({ isActive }) => `py-2 pr-4 pl-3 duration-200
                ${
                  isActive
                    ? "text-teal-400 border-b-2 border-solid border-teal-500"
                    : "text-stone-700"
                } lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`}
              >
                Promodo
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
