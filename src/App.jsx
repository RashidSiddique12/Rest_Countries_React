import "./App.css";
import "./components/style.css";
import Header from "./components/Header";
import BodyContent from "./components/BodyContent";
// import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/Theme.js";
import { useState } from "react";

function App() {
  
  const[backgroundMode, setBackgroundMode] = useState("whiteGrey");
  const[elementMode, setElementMode] = useState("white")

  return (
    <ThemeContext.Provider value={{backgroundMode, setBackgroundMode,elementMode,setElementMode}}>
      <div className={backgroundMode}>
        <Header />
        <BodyContent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
