import "./App.css";
import logo from "./logo.png";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import VideoPage from "./screens/VideoPage";
import { v4 as uuid } from "uuid";
import AsideNav from "./components/AsideNav";
import ExploreVideos from "./screens/ExploreVideos";
import LikedVideos from "./screens/LikedVideos";
import History from "./screens/History";
import Playlists from "./screens/Playlists";
import { ModalProvider } from "./Contexts/ModalContext";
import { AuthProvider } from "./Contexts/AuthDialogContext";
import { VideoListingProvider } from "./Contexts/VideoListingContext";
import VideoPlayer from "./components/VideoPlayer";
function App() {
  return (
    <div className="App">
      <Router>
        <ModalProvider>
          <AuthProvider>
            <VideoListingProvider>
              <nav className="nav-bar shadow-box" id="my-nav-bar">
                <Header />
              </nav>
              <div className="main-container">
                <AsideNav />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<ExploreVideos />} />
                  <Route path="/liked-videos" element={<LikedVideos />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/playlists" element={<Playlists />} />
                  <Route path="/video/:videoId" element={<VideoPage />} />

                </Routes>
              </div>
            </VideoListingProvider>
          </AuthProvider>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
