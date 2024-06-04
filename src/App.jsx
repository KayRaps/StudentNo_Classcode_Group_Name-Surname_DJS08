import React from "react"; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

function App() {
    return (
      <BrowserRouter>
      <header>
        <Link className = "site-logo" to = "/">#VanLife</Link>
        <nav>
          <Link to = "/About"></Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    )
  }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

export default App
