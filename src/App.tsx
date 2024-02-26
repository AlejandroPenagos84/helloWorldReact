import './App.css'
import React, { useState } from 'react';

function App() {

  const [showMessage, setShowMessage] = useState(false);

  const toggleButton = ()=>{
    setShowMessage(!showMessage);
  }

  return (
    <>
      <div className="container">
        <img src="https://media.ambito.com/p/14c729eb6da43e2cdf66656daf6e6760/adjuntos/239/imagenes/037/818/0037818743/1200x675/smart/valorant.jpg" alt="Imagen Random" />
        <h2>Javier Alejandro Penagos Hernandez</h2>
        <button onClick={toggleButton}>Oprime aqui</button>
        {showMessage  &&
        (
         <p>Imaginacion full xd</p>
        )}
      </div>
    </>
  )
}

export default App
