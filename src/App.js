import "./App.css";
import logo from "./logo.png";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./screens/Home";
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      
      <Router>
      <nav className="nav-bar shadow-box" id="my-nav-bar">
                    <Header />
                  </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
