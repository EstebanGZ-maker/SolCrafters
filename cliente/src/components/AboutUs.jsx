import aboutimg from "../assets/aboutimg.png";
import logo from "../assets/logo.png";

function AboutUs() {
  
  return (

    <div>
        <h2>About us</h2>
      <div>
          <img src={aboutimg} alt="" />
      </div>

        <h3>SOLUCIONES A TU ALCANCE</h3>
        <div>
          <img src={logo} alt="" />
          {/* <h2>
            SOLCRAFT
          </h2> */}

        </div>
      <p>
          
        $ help
        $ We are coding champions here at Code Craft Solutions. We live, breathe and think code and ways to improve code. 
        Our expert team specializes in coding beautiful custom websites and mobile applications.
        We exist to exceed expectations of our customers and to be truly dedicated to them. In other words we want to be 
        your partner, take the stress out of a difficult technical initiative. We are only successful if the Customer is delighted with our work. 
      
      </p>

    </div>
  )
}

export default AboutUs