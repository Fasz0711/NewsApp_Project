import { useEffect, useState } from "react";

export const useFetchNews = (input) => {
  const [data, setData] = useState([]);
  const endpoint = input
    ? `https://newsapi.org/v2/everything?q=${input}&apiKey=0a51d27a0edc41ee9d050071c0567371`
    : null;

  const fetchData = async () => {
    if (!endpoint) return;
    const response = await fetch(endpoint);
    const data = await response.json();

    setData(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return { data };
};
