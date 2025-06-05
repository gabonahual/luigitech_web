export class ModeloPelicula {
  constructor({ titulo, descripcion, director, anio, genero, duracion }) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.director = director;
    this.anio = anio;
    this.genero = genero;
    this.duracion = duracion; // en minutos
    this.calificacion = 0;
  }
}
