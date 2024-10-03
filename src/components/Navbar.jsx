import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex flex-wrap items-center gap-6 text-sm">
        <li>
            <NavLink
              to={"/business"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              business{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/entertainment"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              entertainment{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/general"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              general{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/science"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              science{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/health"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              health{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/sports"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              sports{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/technology"}
              className="text-white  transition hover:text-blue-300/75"
            >
              {" "}
              technology{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
