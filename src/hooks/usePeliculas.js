import { useState } from 'react';
import { ModeloPelicula } from './ModeloPelicula';
import { peliculasbdd } from '../bdd';

export function usePeliculas() {
  const [peliculas, setPeliculas] = useState(peliculasbdd);

  const buscarPorTitulo = (cadena) => {
  const texto = cadena.trim().toLowerCase();
  const generosDisponibles = ['aventuras', 'romance', 'adultos', 'drama', 'comedia', 'terror'];

  // Si coincide con un género, retornar todas de ese género
  if (generosDisponibles.includes(texto)) {
    return peliculas.filter((peli) => peli.genero.toLowerCase() === texto);
  }

  // Búsqueda por título
  const regex = new RegExp(texto, 'i');
  const resultados = peliculas.filter((peli) => regex.test(peli.titulo));

  if (resultados.length >= 4) return resultados;

  // Agrega 5 aleatorias si hay pocos resultados
  const restantes = peliculas.filter((peli) => !resultados.includes(peli));
  const aleatorias = restantes.sort(() => 0.5 - Math.random()).slice(0, 5);

  return [...resultados, ...aleatorias];
};


  const filtrarPorGenero = (genero) => {
    return peliculas.filter((peli) => peli.genero.toLowerCase() === genero.toLowerCase());
  };

  return {
    peliculas,
    buscarPorTitulo,
    filtrarPorGenero, // <- nuevo método
  };
}
