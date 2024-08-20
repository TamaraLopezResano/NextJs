import { useState } from 'react';

export default function Home() {
  
  const [count, setCount] = useState(0);
 
  const [name, setName] = useState('');
  
  const [resta, setResta] = useState(false);

  const handleIncrement = () => {
    setCount(resta ? count - 1 : count + 1);
  };

  
  const handleUpdateName = () => {
    const nameInput = document.getElementById('name-input').value;
    setName(nameInput || 'Falta ingresar un nombre');
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        Contador: <span>{count}</span>
      </div>
      <button onClick={handleIncrement}>Incrementar</button>

      <div>
        <p>Mi nombre es: <span>{name || 'Falta ingresar un nombre'}</span></p>
        <input type="text" id="name-input" placeholder="Ingrese su nombre" />
        <button onClick={handleUpdateName}>Modificar Nombre</button>
      </div>

      <div>
        <label htmlFor="resta-checkbox">Resta</label>
        <input
          type="checkbox"
          id="resta-checkbox"
          checked={resta}
          onChange={() => setResta(!resta)}
        />
      </div>
    </div>
  );
}
