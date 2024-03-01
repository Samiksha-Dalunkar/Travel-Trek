import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Destinations from "./components/destinations"
import Hotels from "./components/hotels";
import Activities from "./components/activities"
import Contact from "./components/contact";
import NotFound from "./components/notfound"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  return <>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/destinations" element={<Destinations/>}  />
      <Route path="/hotels" element={<Hotels/>}  />
      <Route path="/activities" element={<Activities/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
}

export default App;






