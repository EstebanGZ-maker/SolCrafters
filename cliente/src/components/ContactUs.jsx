function ContactUs() {
  return (
    <div>

      <h2>ContactUs</h2>
      <div>
        <p>Utiliza las siguientes vías de contacto, o rellena el formulario. </p>
      </div>
        <div>
          <ul>Vía E-mail</ul>
          <ul>hola@unsitiogenial.es</ul>
          <ul>En nuestras redes sociales</ul>
          <ul>@unsitiogenial</ul>
          <ul>Por teléfono</ul>
          <ul>91-1234-567</ul>

        </div>

      <div> <h2>CONTACTA CON UNO DE NUESTROS ACESORES</h2>
        <form action="">

            <div>
              <input type="text" name="Nombre" id="Nombre" />
            </div>
            
            <div>
              <input type="email" name="emial" id="email" />
            </div>

            <div>
              <input type="number" name="numberphone" id="numberphone" />
            </div>

            <div>
              <input type="text" name="description" id="description" />
            </div>

        </form>
      </div>

    </div>
  )
}

export default ContactUs