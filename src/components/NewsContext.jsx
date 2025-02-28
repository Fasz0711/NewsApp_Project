import { createContext, useState, useEffect } from "react";

export const FavNews = createContext();
export const NewsContext = ({ children }) => {
  const [favNews, setFavNews] = useState(() => {
    const favoriteNews = localStorage.getItem("favNews");
    return favoriteNews ? JSON.parse(favoriteNews) : [];
  });

  useEffect(() => {
    // cada que favNews cambia se guarda en LocalStorage
    localStorage.setItem("favNews", JSON.stringify(favNews));
  }, [favNews]);

  const addFav = (New) => {
    const existingNews = favNews.find((news) => news.url === New.url);
    if (existingNews) {
      setFavNews(
        favNews.map((news) =>
          news.url === New.url ? { ...news, quantity: news.quantity + 1 } : news
        )
      );
    } else {
      setFavNews([
        ...favNews,
        {
          title: New.title,
          description: New.description,
          image: New.urlToImage,
          url: New.url,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFav = (article) => {
    setFavNews((currentFavorites) =>
      currentFavorites.filter((item) => item.url !== article.url)
    );
  };

  return (
    <FavNews.Provider value={{ favNews, addFav, removeFav }}>
      {children}
    </FavNews.Provider>
  );
};
