import "./style.css"
import "../index.css"
import { useState, useEffect } from 'react';
import withelogo from "../assets/logowithe.png";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const selectMenu = () => {
    setIsOpen(!isOpen)
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div>
    
            <img src={withelogo} alt="logo" width={100} className="imgHeader" />
            <a href="#home"></a>

      <nav className="nav" >

        <button className="menu-selec " onClick={selectMenu}>
        ☰ Menú          
        </button>

            <ul className={`contenidoNav ${isOpen ? 'active' : ''}`}>



              <li className={activeSection === 'home' ? 'active' : ''} >
                <a href="#home">SOLCRAFT </a>
              </li>

              <li className={activeSection === 'ourService' ? 'active' : ''} >
                <a href="#ourService">SERVICIOS </a>
              </li>

              <li className={activeSection === 'customers' ? 'active' : ''}>
                <a href="#customers">CLIENTES </a>
              </li>
              
              <li className={activeSection === 'sobreNosotros' ? 'active' : ''}>
                <a href="#sobreNosotros">SOBRE NOSOTROS </a>
              </li>
              
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact">CONTACTANOS </a>
              </li>

            </ul>

      </nav>


    </div>
  )
}

export default Navbar