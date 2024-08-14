
import { BrowserRouter as Router} from 'react-router-dom';

import HomePage from "./components/HomePage";
import Ourservice from "./components/OurService";
import Customers from "./components/Customers";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/headers"; 
import Footer from "./components/Footer"; 




const App = () => {
  return (
    <Router>
      <div>

        <section id="Navbar" >
          {< Navbar/>} 
        </section>
      
        <section id="home"  >
          {< HomePage/>} 
        </section>
        
        <section id="ourService">
          {< Ourservice/>} 
        </section>

        <section id="customers">
          {< Customers/>} 
        </section>

        <section id="sobreNosotros">
          {< AboutUs/>} 
        </section>

        <section id="contact">
          {< ContactUs/>} 
        </section>

        <section id="footer">
          {< Footer/>} 
        </section>

      </div>
    </Router>
  );
};

export default App;


