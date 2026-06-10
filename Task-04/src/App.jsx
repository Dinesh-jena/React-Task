import React, { useContext, useState } from "react";
import { UserDataContext } from "./context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import TableComponents from "./components/TableComponents";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Users" element={<TableComponents />} />
      </Routes>
    </div>
  );
};

export default App;
