import { createContext, useState } from "react";

export const GlobalVariable = createContext();

export default function GlobalProvider({ children }) {
  const news_url = "https://saurav.tech/NewsAPI/everything/cnn.json";
  const health_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
  const business_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json";
  const general_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
  const science_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/science/in.json";
  const entertainment_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json";
  const technology_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
  const sports_url =
    "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json";

  const value = {
    news_url,
    health_url,
    business_url,
    general_url,
    science_url,
    entertainment_url,
    technology_url,
    sports_url,
  };

  return (
    <GlobalVariable.Provider value={value}>{children}</GlobalVariable.Provider>
  );
}
