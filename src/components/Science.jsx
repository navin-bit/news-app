import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalVariable } from "../context/Global";
import useFetch from "./useFetch";
export default function Science() {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [singlenews, setSingleNews] = useState(null);

  const { science_url } = useContext(GlobalVariable);
  const { data, loading, error } = useFetch(science_url);

  useEffect(() => {
    if (data) {
      setNews(data.articles);
    }
  }, [data]);

  useEffect(() => {
    if (news) {
      const res = news[id];
      setSingleNews(res);
    }
  }, [id, news]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading news.</p>;
  if (!singlenews) return <p>News not found.</p>;

  return (
    <div className="w-full mx-auto sm:max-w-md mt-4 lg:max-w-lg">
      <article className="overflow-hidden rounded-lg   shadow-sm">
        <img
          alt={singlenews.title || "title"}
          src={singlenews.urlToImage || "image"}
          className="h-80 w-full object-cover sm:h-64 lg:h-80"
        />

        <div className="p-4 sm:p-6">
          <p className="text-sm mt-4 font-medium text-gray-100 sm:text-sm lg:text-sm">
            {singlenews.author}
          </p>
          <h3 className="text-lg font-medium text-gray-500 sm:text-xl lg:text-2xl">
            {singlenews.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm text-gray-500 sm:text-base lg:text-lg">
            {singlenews.description}
          </p>
          <p className="mt-2 line-clamp-3 text-sm text-gray-500 sm:text-base lg:text-lg">
            {singlenews.content}
          </p>
          <a href={singlenews.url} target="_blank">
            <p className="mt-2 line-clamp-3 text-sm  sm:text-base lg:text-lg underline text-blue-800">
              {singlenews.url}
            </p>
          </a>
          <p className="mt-2 line-clamp-3 text-sm text-gray-500 sm:text-base lg:text-lg">
            {singlenews.publishedAt}
          </p>
        </div>
      </article>
    </div>
  );
}
