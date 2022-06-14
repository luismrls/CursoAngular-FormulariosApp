import { Component } from '@angular/core';

interface persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoAnime: string = '';

  persona: persona = {
    nombre: 'Luis',
    favoritos: [
      { id: 1, nombre: 'Dragon Ball'},
      { id: 2, nombre: 'Naruto'}
    ]
  }

  agregarJuego() {

    if (this.nuevoAnime === '') {
      return
    }

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoAnime
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoAnime = '';
  }


  guardar() {
    console.log('formulario posteado')
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index,1)
  }
}
