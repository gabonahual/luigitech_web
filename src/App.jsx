import { useState } from 'react';
import { usePeliculas } from './hooks'; // asegúrate que usePeliculas esté exportado en hooks/index.js

function App() {
  const { buscarPorTitulo } = usePeliculas();
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    setResultados(buscarPorTitulo(valor));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar por título"
        value={busqueda}
        onChange={handleChange}
      />
      <ul>
        {resultados.map((peli, idx) => (
          <li key={idx}>{peli.titulo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
