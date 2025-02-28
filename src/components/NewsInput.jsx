import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const NewsInput = ({ setInputValue, setFormValue }) => {
  return (
    <>
      <div className="box-border w-full py-4 flex flex-row  justify-center items-center  ">
        <form className="flex flex-row gap-4" onSubmit={setFormValue}>
          <Input
            type="text"
            placeholder="Ingresa un tema"
            className="bg-white"
            onChange={setInputValue}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </>
  );
};
