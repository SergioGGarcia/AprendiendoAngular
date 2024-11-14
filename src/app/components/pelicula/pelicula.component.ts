import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  @Input() pelicula!: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  seleccionar(event:any, pelicula:any) {
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
