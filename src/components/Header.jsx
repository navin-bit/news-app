import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <div>
      <header className="w-full border-b border-gray-200  ">
        <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link to={"/"}>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  📰 News App
                </h1>
              </Link>

              <p className="mt-1.5 text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                recusandae.
              </p>
            </div>

            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
}
