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

  persona: persona = {
    nombre: 'Luis',
    favoritos: [
      { id: 1, nombre: 'Dragon Ball'},
      { id: 2, nombre: 'Naruto'}
    ]
  }


  guardar() {
    console.log('formulario posteado')
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index,1)
  }
}
