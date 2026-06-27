import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import NewContact from "./components/contact/NewContact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Blog />
        <NewContact />
      </main>
    </>
  );
};

export default App;
