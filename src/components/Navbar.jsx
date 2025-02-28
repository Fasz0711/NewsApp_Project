import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "/NewsApi_logo.png";
export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-blue-600 flex items-center px-6 shadow-md">
      <img
        src={logo}
        alt="NewsApi logo"
        className="h-10"
        onError={(e) => {
          console.error("Error loading image:", e);
        }}
      />

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
