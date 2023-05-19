import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cards from "./Pages/Cards";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Cards/>
    </BrowserRouter>
   
    </>
  );
}

export default App;