import { Navbar, Header, About, Footer, Portfolio } from './components';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
                <About />
                <Portfolio />
                <Footer />
            </div>
        </div>
    )
}

export default App;