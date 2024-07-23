
import { BrowserRouter as Router, Link } from 'react-router-dom';

import HomePage from "./components/HomePage";
import Ourservice from "./components/OurService";
import Customers from "./components/Customers";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
/*import Navbar from "./components/Navbar";
 import Footer from "./components/Footer"; */




const App = () => {
  return (
    <Router>
      <div>
        <nav>
          
            <Link to="#home">Home</Link>
            <Link to="#ourService">Servicios</Link>
            <Link to="#customers">Clientes</Link>
            <Link to="#about">About us</Link>
            <Link to="#contact">Contactanos</Link>

        </nav>

        <hr />

        {/* <section id="navbar">
          {< Navbar/>} 
        </section> */}
      
        <section id="home">
          {< HomePage/>} 
        </section>
        
        <section id="ourService">
          {< Ourservice/>} 
        </section>

        <section id="customers">
          {< Customers/>} 
        </section>

        <section id="aboutUs">
          {< AboutUs/>} 
        </section>

        <section id="contact">
          {< ContactUs/>} 
        </section>

        {/* <section id="footer">
          {< Footer/>} 
        </section> */}

      </div>
    </Router>
  );
};

export default App;


