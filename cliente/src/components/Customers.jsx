import "./service.css"
import  "../index.css"

function Customers() {

  const customers = [
    { title: 'CLIENTE 1', icon: '📄' },
    { title: 'CLIENTE 2', icon: '🌐' },
    { title: 'CLIENTE 3', icon: '🤖' },
    { title: 'CLIENTE 4', icon: '⚙️' },
    { title: 'CLIENTE 5', icon: '🔧' },
    { title: 'CLIENTE 6', icon: '📊' }
  ];


  const CustomersCard = ({ title, icon }) => {
    return (
      <div className="service-card ">
        <div className="service-card-content">
            <h2>{title}</h2>


          <div className="">
            <span>{icon}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="our-service">
      <header className="App-header">
        <h1>CLIENTES</h1>
      </header>
      <div className="services-container">
        {customers.map((service, index) => (
          <CustomersCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
        <div><img src="" alt="soy la imagen pa" /></div>
        {/* <div className="contact-container">
          <button className="contact-button">CONTACTANOS</button>
        </div> */}
    </div>
  );

}

export default Customers