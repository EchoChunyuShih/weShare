import React from "react";
import { ReactComponent as Loader } from "../assets/circles.svg";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader fill="#ccc" width="5rem" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
