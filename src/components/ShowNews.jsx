import React from "react";
import { useFetchNews } from "./useFetchNews";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Heart } from "lucide-react";

export const ShowNews = ({ formValue, addFav }) => {
  const { data } = useFetchNews(formValue);

  const addAndSoonerEvent = (article) => {
    addFav(article);
    toast.success("Added to favorites! ❤️");
  };

  return (
    <>
      <Toaster />;
      <div className="w-full flex flex-row justify-center box-border ">
        <Carousel className="w-6/12 max-w-96 flex flex-row items-center">
          <CarouselContent className="flex items-center">
            {data && data.length > 0 ? (
              data.map((article, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
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
                              addAndSoonerEvent(article);
                            }}
                          >
                            <Heart size={30} className="hover:fill-red-500 " />
                          </button>
                        </div>
                        <div>
                          <p className="mb-3 text-justify">
                            {article.description}
                          </p>
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full max-h-40 object-cover rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <p className="ml-5 text-center"> Aun no hay noticias...</p>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
