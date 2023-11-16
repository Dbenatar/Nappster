import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feeding from "./components/Feeding";
import Nappies from "./components/Nappies";
import Sleep from "./components/Sleep";
import Home from "./components/Home";
import NewFeed from "./components/NewFeed";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./components/Home.css";

function App() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    getFeed();
  }, []);

  async function getFeed() {
    const API = "http://localhost:8080/feeding";
    const axiosRes = await axios.get(API);
    setFeeds(axiosRes.data);
  }

  return (
    <BrowserRouter>
      <header>
        <img
          className="mainlogo"
          src="https://em-content.zobj.net/source/samsung/380/baby-symbol_1f6bc.png"
          alt="Logo"
        />

        <h1>
          <Link className="header" to="/">
            Nappster
          </Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/feeding"
          element={<Feeding feeds={feeds} setFeeds={setFeeds} />}
        />

        <Route path="/nappies" element={<Nappies />} />

        <Route path="/sleep" element={<Sleep />} />
      </Routes>

      <footer>&copy;Nappster - Making parents' lives easier since 2023</footer>
    </BrowserRouter>
  );
}

export default App;
