import { Navbar, Footer } from './components';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import AboutPage from "./pages/about/AboutPage";

function App() {
    return (
        <div className="gradient__bg">
            <Router>
                <Navbar />
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/about" element = {<AboutPage />} />
                    <Route path = "/portfolio" element = {<PortfolioPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;