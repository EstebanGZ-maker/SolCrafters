import {Link } from 'react-router-dom';

function Navbar() {
  return (

    <div>

      <nav>

        <Link to="#home">IMG <img   alt=""/></Link>
        <Link to="#home">SOLCRAFT </Link>
        <Link to="#home">INICIO </Link>
        <Link to="#ourService">SERVICIOS </Link>
        <Link to="#customers">CLIENTES </Link>
        <Link to="#about">ABOUT US </Link>
        <Link to="#contact">CONTACTANOS </Link>

      </nav>


    </div>
  )
}

export default Navbar