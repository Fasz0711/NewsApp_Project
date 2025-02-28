import React from "react";
import { Navbar } from "./Navbar";
import { NewsInput } from "./NewsInput";
import { useState } from "react";
import { useContext } from "react";
import { ShowNews } from "./ShowNews";
import { FavNews } from "./NewsContext";

export const NewsSearcher = () => {
  const [input, setInput] = useState("");
  const [formValue, setForm] = useState("");

  const { addFav } = useContext(FavNews);

  const setInputValue = (e) => {
    setInput(e.target.value);
  };

  const setFormValue = (e) => {
    e.preventDefault();
    setForm(input);
  };

  return (
    <div className="w-screen min-h-screen  bg-slate-300">
      <>
        <Navbar />
        <NewsInput
          setInputValue={setInputValue}
          setFormValue={setFormValue}
        ></NewsInput>
        <ShowNews formValue={formValue} addFav={addFav} />
      </>
    </div>
  );
};
