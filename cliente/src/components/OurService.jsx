import "./service.css"
import  "../index.css"
/* import React from 'react'; */


function OurService() {
  const services = [
    { title: 'FACTURACIÓN ELECTRÓNICA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.', icon: '📄' },
    { title: 'PÁGINAS WEB', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.', icon: '🌐' },
    { title: 'RPA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.', icon: '🤖' },
    { title: 'OPTIMIZACIÓN DE PROCESOS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.', icon: '⚙️' },
    { title: 'AUTOMATIZACIÓN DE PROCESOS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.', icon: '🔧' },
    { title: 'CONSULTORÍA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.', icon: '📊' }
  ];

  
  const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="service-card ">
        <div className="service-card-content">
          <div className="service-card-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="service-card-icon">
            <span>{icon}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="our-service">
      <header className="App-header">
        <h1>SERVICIOS</h1>
      </header>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
      <div className="contact-container">
        <button className="contact-button">CONTACTANOS</button>
      </div>
    </div>
  );
}

export default OurService;
