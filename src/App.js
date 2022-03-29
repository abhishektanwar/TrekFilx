import "./App.css";
import logo from "./logo.png";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import VideoPage from "./screens/VideoPage";
import {v4 as uuid} from 'uuid'
import AsideNav from "./components/AsideNav";
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav-bar shadow-box" id="my-nav-bar">
          <Header />
        </nav>
        <div className="main-container">
          <AsideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<VideoPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
