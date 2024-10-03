import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { GlobalVariable } from "../context/Global";
import useFetch from "./useFetch";
 

export default function SportsList() {
  const { sports_url} = useContext(GlobalVariable);
  const { data, loading, error} = useFetch(sports_url);

  const [news, setNews] = useState([]);

  useEffect(() => {
    if (data) {
      setNews(data.articles);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }

  console.log("news list", news);

  return (
    <div>
      <div className="container mx-auto px-4">
        <ul className="grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {news && news.length > 0 ? (
            news.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/sports/${index}`}
                  className="group relative block bg-black rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105"
                >
                  <img
                    alt="news"
                    src={item.urlToImage}
                    className="h-60 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-red-500">
                      {item.author || "Unknown Author"}
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-white sm:mt-2 lg:mt-4">
                      {item.title}
                    </p>
                    <div className="mt-16 sm:mt-24 lg:mt-4">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No data found</p>
          )}
        </ul>
      </div>
    </div>
  );
}
