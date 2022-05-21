import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./containers/Home";
import { AuthProvider } from "./context/AuthContext";
import { SidebarProvider } from "./context/SidebarContext";

const App = () => {
  return (
    <SidebarProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/*" element={<Home />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </SidebarProvider>
  );
};

export default App;
