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
import { PlaylistProvider } from "./Contexts/PlaylistContext";
import MockmanEs from "mockman-js";
import Playlist from "./screens/Playlist";
import WatchLater from "./screens/WatchLater";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./screens/Page404";
import { useState } from "react";
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <ToastContainer theme="colored" autoClose={1200} />
      <Router>
        <ModalProvider>
          <AuthProvider>
            <VideoListingProvider>
              <PlaylistProvider>
                <nav className="nav-bar shadow-box" id="my-nav-bar">
                  <Header open={open} setOpen={setOpen} />
                </nav>
                <div className="main-container">
                  <AsideNav open={open} setOpen={setOpen} />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<ExploreVideos />} />
                    <Route element = { <PrivateRoute /> }>
                      <Route path="/liked-videos" element={<LikedVideos />} />
                      <Route path="/history" element={<History />} />
                      <Route path="/playlists" element={<Playlists />} />
                      <Route
                        path="/playlist/:playlistId"
                        element={<Playlist />}
                      />
                      <Route path="/video/:videoId" element={<VideoPage />} />
                      <Route path="/watch-later" element={<WatchLater />} />
                    </Route>
                    <Route path="/mock-api" element={<MockmanEs />} />
                    <Route path="*" element={<Page404 />} />
                  </Routes>
                </div>
              </PlaylistProvider>
            </VideoListingProvider>
          </AuthProvider>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
