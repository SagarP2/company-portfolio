// src/index.js
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeContext, useMode } from "./Admin/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App"; // Main user application
import AdminApp from "./Admin/App"; // Admin panel application
import AdminLogin from "./Admin/scenes/Login"; // Admin login
import Dashboard from "./Admin/App";
import Form from "./Admin/scenes/Form";
import ProductPage from "./components/ProductPage";
import Subproject from "./Admin/scenes/Subproject";
import BounceBackHome from './components/AllPages/BounceBackHome';
import ToddlerCanRead from './components/AllPages/ToddlerCanRead';
import SIGNORVINOHome from './components/AllPages/SIGNORVINOHome';
import LongsHome from "./components/AllPages/LongsHome";
import DrapeCoHome from "./components/AllPages/DrapeCoHome";
import COOLSHEETSHome from "./components/AllPages/COOLSHEETSHome";
import Bringmeakayak from "./components/AllPages/Bringmeakayak";
import Optivisa from "./components/AllPages/Optivisa";
import DivinityFashion from "./components/AllPages/DivinityFashion"
import Yamora from "./components/AllPages/Yamora"
import RoyalTail from "./components/AllPages/RoyalTail"
import Latitude from "./components/AllPages/Latitude"
import Allprojects from "./components/AllProjects";


function RootApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* User side */}
        <Route path="/*" element={<App />} />

        {/* Admin login */}
        <Route
          path="/admin"
          element={isAuthenticated ? (
            <Navigate to="/admin/dashboard" />
          ) : (
            <AdminLogin onLogin={handleLogin} />
          )} />

        {/* Admin dashboard */}
        <Route
          path="/admin/*"
          element={isAuthenticated ? (
            <AdminApp onLogout={handleLogout} />
          ) : (
            <Navigate to="/admin" />
          )} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/subproject" element={<Subproject />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/bouncebackhome" element={<BounceBackHome />} />
        <Route path="/toddlercanread" element={<ToddlerCanRead />} />
        <Route path="/signorvinohome" element={<SIGNORVINOHome />} />
        <Route path="/coolssheetshome" element={<COOLSHEETSHome />} />
        <Route path="/drapecohome" element={<DrapeCoHome />} />
        <Route path="/longshome" element={<LongsHome />} />
        <Route path="/bringmeakayak" element={<Bringmeakayak />} />
        <Route path="/optivisa" element={<Optivisa />} />
        <Route path="/divinityfashion" element={<DivinityFashion />} />
        <Route path="/latitude" element={<Latitude />} />
        <Route path="/royaltail" element={<RoyalTail />} />
        <Route path="/yamora" element={<Yamora />} />
        <Route path="/all-projects" element={<Allprojects />} />
       
      </Routes>
    </Router>
  );
}

// Use createRoot instead of ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
