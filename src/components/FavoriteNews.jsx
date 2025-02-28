import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import { FavNews } from "./NewsContext";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const FavoriteNews = () => {
  const { favNews, removeFav } = useContext(FavNews);

  const removeAndSoonerEvent = (article) => {
    removeFav(article);
    toast.success("Removed from favorites! 🗑️");
  };

  return (
    <div className="w-screen min-h-screen h-screen bg-slate-300">
      <>
        <Toaster />
        <Navbar></Navbar>
        <div className="box-border p-6 bg-slate-300 min-h-screen grid grid-cols-3 gap-5">
          {favNews.map((article, index) => (
            <div key={index}>
              <Card className="box-border w-full p-3">
                <CardContent>
                  <div className="flex flex-row w-full justify-between items-center">
                    <a
                      className="w-10/12 font-black underline text-2xl text-left mb-3"
                      href={article.url}
                    >
                      {article.title}
                    </a>
                    <button
                      className="outline-none"
                      onClick={() => {
                        removeAndSoonerEvent(article);
                      }}
                    >
                      <Trash2 size={30} className="hover:fill-red-500 " />
                    </button>
                  </div>
                  <div>
                    <p className="mb-3 text-justify">{article.description}</p>
                    <img src={article.image} alt={article.title} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
