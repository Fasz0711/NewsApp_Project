import React from "react";

import { NewsSearcher } from "./components/NewsSearcher";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NewsContext } from "./components/NewsContext";
import { FavoriteNews } from "./components/FavoriteNews";
export const App = () => {
  return (
    <>
      <NewsContext>
        <Router>
          <Routes>
            <Route path="/" element={<NewsSearcher />} />
            <Route path="/favNews" element={<FavoriteNews />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </NewsContext>
    </>
  );
};
