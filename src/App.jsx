import "./App.css";
import "./components/style.css";
import Header from "./components/Header";
import BodyContent from "./components/BodyContent";
import useTheme from "./context/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
  const { backgroundMode } = useTheme();

  return (
    <div className={backgroundMode}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BodyContent />} />
          <Route path='/detail/:id' element={<CountryDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
