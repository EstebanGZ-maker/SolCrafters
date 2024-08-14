import "./style.css"
import "../index.css"
import clientes from '../assets/clientes.png';

function Customers() {

  const customers = [
    { title: 'CLIENTE 1', icon: '📄' },
    { title: 'CLIENTE 2', icon: '🌐' },
    { title: 'CLIENTE 3', icon: '🤖' },
    { title: 'CLIENTE 4', icon: '⚙️' },
    { title: 'CLIENTE 5', icon: '🔧' },
    { title: 'CLIENTE 6', icon: '📊' }
  ];


  // eslint-disable-next-line react/prop-types
  const CustomersCard = ({ title, icon }) => {
    
    return (

      <section>

        <div className="soy-el-div">
          <div className="customers-icon">
              <span>{title}</span>
              <h2>{icon}</h2>
          </div>
        </div>

      </section>

    );
  };
        
  
  return (
    <div >
      <header className="App-header">
        <h1>CLIENTES</h1>
      </header>
      <div >
        {customers.map((service, index) => (
          <CustomersCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
        <div className="customer-">
          <img src={clientes} alt="soy la imng" />
        </div>
        
        {/* <div className="contact-container">
          <button className="contact-button">CONTACTANOS</button>
        </div> */}
    </div>
  );

}

export default Customers