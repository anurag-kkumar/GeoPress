import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);