import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-blue-600 flex items-center px-6 shadow-md">
      <img src="/NewsApi.logo.png" alt="ECommerce logo" className="h-10" />
      <div className="ml-5 flex gap-4">
        <Button variant="link" className="text-white text-lg">
          <Link to="/">Search News</Link>
        </Button>
        <Button variant="link" className="text-white text-lg">
          <Link to="/favNews">Fav News</Link>
        </Button>
      </div>
    </nav>
  );
};
