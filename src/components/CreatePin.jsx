import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const CreatePin = () => {
  const { user } = useContext(AuthContext);
  return <div>CreatePin</div>;
};

export default CreatePin;
