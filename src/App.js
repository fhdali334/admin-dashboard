import Sidebar from "./Components/Sidebar/Sidebar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import react, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cards from "./Components/Cards/Cards";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Cards />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
 
      </div>  
    </>
  );
}

export default App;
