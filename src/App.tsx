import { Navbar, Header, About, Footer } from './components';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}

export default App;