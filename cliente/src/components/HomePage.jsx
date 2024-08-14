import clientes from "../assets/clientes.png";

const HomePage = () => {
  return (


    <section className="contenido-menu" >

        <div>
          <h1>SOLCRAFT</h1>  
          <h2>SOLUCIONES A TU ALCANCE</h2>

          {/* <div className="soyel-p" > */}
            
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.</p>
         
        
          <button className="contact-button" >CONTACTANOS</button>
        
        </div>

        <div className="home-img" >
          <img src={clientes} alt="Figura #1" />
        </div>
        
    </section>


  );
};

export default HomePage;
