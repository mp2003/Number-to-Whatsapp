import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendText from './Components/SendText/SendText'
import About from './Components/About/About'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container d-flex justify-content-center">
        </div>
        <Footer />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/sendtext" element={<SendText />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
