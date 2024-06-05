import React from "react"; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans"
import VanDetail from "./components/VanDetail"
import "./index.css";

import "./server"

function App() {
    return (
      <BrowserRouter>
      <header>
        <Link className = "site-logo" to = "/">#VanLife</Link>
        <nav>
          <Link to = "/about">About</Link>
          <Link to = "/vans">Vans</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail/>}/>

        </Routes>
      </BrowserRouter>
    )
  }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

export default App
