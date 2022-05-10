import { createContext, useState, useEffect } from "react";
import { userQuery } from "../utils/data";
import { client } from "../utils/client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  useEffect(() => {
    const query = userQuery(userInfo?.googleId);
    client.fetch(query).then((data) => setUser(data[0]));
  }, []);
  return (
    <AuthContext.Provider value={(user && user, setUser)}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
