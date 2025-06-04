// bdd/peliculas.js
import { ModeloPelicula } from '../hooks/ModeloPelicula';

export const peliculasbdd = [
  // Aventuras
  new ModeloPelicula({ titulo: 'Piratas del Caribe', descripcion: 'Un capitán excéntrico busca un tesoro maldito.', director: 'Gore Verbinski', anio: 2003, genero: 'Aventuras', duracion: 143 }),
  new ModeloPelicula({ titulo: 'Jumanji', descripcion: 'Un juego de mesa mágico cobra vida.', director: 'Joe Johnston', anio: 1995, genero: 'Aventuras', duracion: 104 }),
  new ModeloPelicula({ titulo: 'Indiana Jones y el templo maldito', descripcion: 'Indy viaja a la India para recuperar una piedra sagrada.', director: 'Steven Spielberg', anio: 1984, genero: 'Aventuras', duracion: 118 }),
  new ModeloPelicula({ titulo: 'La Momia', descripcion: 'Una expedición revive a un antiguo sacerdote egipcio.', director: 'Stephen Sommers', anio: 1999, genero: 'Aventuras', duracion: 124 }),
  new ModeloPelicula({ titulo: 'Avatar', descripcion: 'Un ex-marine se une a una civilización alienígena.', director: 'James Cameron', anio: 2009, genero: 'Aventuras', duracion: 162 }),

  // Romance
  new ModeloPelicula({ titulo: 'El diario de una pasión', descripcion: 'Un amor imposible entre clases sociales.', director: 'Nick Cassavetes', anio: 2004, genero: 'Romance', duracion: 123 }),
  new ModeloPelicula({ titulo: 'Orgullo y prejuicio', descripcion: 'La historia de Elizabeth Bennet y Mr. Darcy.', director: 'Joe Wright', anio: 2005, genero: 'Romance', duracion: 129 }),
  new ModeloPelicula({ titulo: 'Antes del amanecer', descripcion: 'Dos desconocidos se conocen en un tren europeo.', director: 'Richard Linklater', anio: 1995, genero: 'Romance', duracion: 101 }),
  new ModeloPelicula({ titulo: 'Titanic', descripcion: 'Un amor trágico a bordo de un barco condenado.', director: 'James Cameron', anio: 1997, genero: 'Romance', duracion: 195 }),
  new ModeloPelicula({ titulo: '500 días con ella', descripcion: 'Una historia no convencional sobre el amor.', director: 'Marc Webb', anio: 2009, genero: 'Romance', duracion: 95 }),

  // Adultos
  new ModeloPelicula({ titulo: 'Eyes Wide Shut', descripcion: 'Una pareja se enfrenta a una crisis existencial.', director: 'Stanley Kubrick', anio: 1999, genero: 'Adultos', duracion: 159 }),
  new ModeloPelicula({ titulo: 'Ninfomanía', descripcion: 'Una mujer cuenta su vida sexual a un hombre mayor.', director: 'Lars von Trier', anio: 2013, genero: 'Adultos', duracion: 241 }),
  new ModeloPelicula({ titulo: 'El Lobo de Wall Street', descripcion: 'Un corredor de bolsa vive una vida de excesos.', director: 'Martin Scorsese', anio: 2013, genero: 'Adultos', duracion: 180 }),
  new ModeloPelicula({ titulo: 'Belle de Jour', descripcion: 'Una mujer burguesa explora su sexualidad oculta.', director: 'Luis Buñuel', anio: 1967, genero: 'Adultos', duracion: 101 }),
  new ModeloPelicula({ titulo: 'Azul es el color más cálido', descripcion: 'Una joven descubre el amor y la sexualidad.', director: 'Abdellatif Kechiche', anio: 2013, genero: 'Adultos', duracion: 180 }),

  // Drama
  new ModeloPelicula({ titulo: 'Cadena perpetua', descripcion: 'Un banquero injustamente encarcelado.', director: 'Frank Darabont', anio: 1994, genero: 'Drama', duracion: 142 }),
  new ModeloPelicula({ titulo: 'Forrest Gump', descripcion: 'La vida extraordinaria de un hombre común.', director: 'Robert Zemeckis', anio: 1994, genero: 'Drama', duracion: 142 }),
  new ModeloPelicula({ titulo: 'El pianista', descripcion: 'Un músico judío sobrevive al Holocausto.', director: 'Roman Polanski', anio: 2002, genero: 'Drama', duracion: 150 }),
  new ModeloPelicula({ titulo: 'El club de la pelea', descripcion: 'Un hombre halla sentido en la violencia.', director: 'David Fincher', anio: 1999, genero: 'Drama', duracion: 139 }),
  new ModeloPelicula({ titulo: 'En busca de la felicidad', descripcion: 'Un padre lucha por sobrevivir y criar a su hijo.', director: 'Gabriele Muccino', anio: 2006, genero: 'Drama', duracion: 117 }),

  // Comedia
  new ModeloPelicula({ titulo: 'Superbad', descripcion: 'Dos amigos intentan triunfar en su última fiesta.', director: 'Greg Mottola', anio: 2007, genero: 'Comedia', duracion: 113 }),
  new ModeloPelicula({ titulo: 'Un loco viaje al pasado', descripcion: 'Un grupo viaja accidentalmente a los 80s.', director: 'Steve Pink', anio: 2010, genero: 'Comedia', duracion: 101 }),
  new ModeloPelicula({ titulo: 'Loco por Mary', descripcion: 'Un hombre sigue obsesionado con su amor del instituto.', director: 'Farrelly Brothers', anio: 1998, genero: 'Comedia', duracion: 119 }),
  new ModeloPelicula({ titulo: '¿Qué pasó ayer?', descripcion: 'Una despedida de soltero que se sale de control.', director: 'Todd Phillips', anio: 2009, genero: 'Comedia', duracion: 100 }),
  new ModeloPelicula({ titulo: 'Legalmente rubia', descripcion: 'Una chica con estilo entra a Harvard Law.', director: 'Robert Luketic', anio: 2001, genero: 'Comedia', duracion: 96 }),

  // Terror
  new ModeloPelicula({ titulo: 'El Conjuro', descripcion: 'Una familia es aterrorizada por una presencia maligna.', director: 'James Wan', anio: 2013, genero: 'Terror', duracion: 112 }),
  new ModeloPelicula({ titulo: 'Actividad Paranormal', descripcion: 'Una pareja graba fenómenos extraños en casa.', director: 'Oren Peli', anio: 2007, genero: 'Terror', duracion: 86 }),
  new ModeloPelicula({ titulo: 'It', descripcion: 'Un payaso demoníaco aterroriza a niños.', director: 'Andy Muschietti', anio: 2017, genero: 'Terror', duracion: 135 }),
  new ModeloPelicula({ titulo: 'El Aro', descripcion: 'Una cinta maldita que provoca la muerte.', director: 'Gore Verbinski', anio: 2002, genero: 'Terror', duracion: 115 }),
  new ModeloPelicula({ titulo: 'Hereditary', descripcion: 'Una familia descubre un oscuro legado.', director: 'Ari Aster', anio: 2018, genero: 'Terror', duracion: 127 }),
];
