"use client"
import { useState } from 'react';
import Checkbox from './checkbox.js';
export default function Contador() {
  
  const [count, setCount] = useState(0);
 
  const [name, setName] = useState('');
  
  const [suma, setSuma] = useState(false);
  const [accion, setAccion] = useState("Resta");

  const handleIncrement = () => {
    if(suma) {
      setCount(count + 1);
    }else{
      setCount(count - 1)
    }
  };

  
  const handleUpdateName = () => {
    const nameInput = document.getElementById('name-input').value;
    setName(nameInput || 'Falta ingresar un nombre');
  };
  const handleCheckboxChange = (checked) => {
    setSuma(checked);
    if(suma){
      setAccion("Resta")
    }else{
      setAccion( "Suma")
    }
    
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        Contador: <span>{count}</span>
      </div>
      <button id="btn_contador" onClick={handleIncrement}>Incrementar</button>

      <div>
        <p>Mi nombre es: <span>{name || 'Falta ingresar un nombre'}</span></p>
        <input type="text" id="name-input" placeholder="Ingrese su nombre" />
        <button onClick={handleUpdateName}>Modificar Nombre</button>
      </div>

      <div>
      <label id="label-checkbox">{accion}</label>
      <Checkbox
        label=""
        checked={suma}
        onChange={handleCheckboxChange}
      />
      </div>
    </div>
  );
}
