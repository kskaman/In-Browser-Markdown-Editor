import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row w-screen overflow-y-hidden">
      {isAsideOpen && <Navbar isOpen={isAsideOpen} />}
      <div
        className={`relative flex flex-col ml-0 transform ${
          isAsideOpen ? "translate-x-[250px]" : "translate-x-0"
        } transition-transform duration-500 ease-in-out min-w-[100%]`}
      >
        <Header isOpen={isAsideOpen} toggleNavbar={setAsideOpen} />

        <HomePage />
      </div>
    </div>
  );
};

export default App;
