import { useEffect, useState } from "react";

export const useFetchNews = (input) => {
  const [data, setData] = useState([]);
  const endpoint = input
    ? `https://gnews.io/api/v4/search?q=${input}&lang=es&max=25&apikey=cc4a52a5948f13a5c43f569938e246d2`
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
