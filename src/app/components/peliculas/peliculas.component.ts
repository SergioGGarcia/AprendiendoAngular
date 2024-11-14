import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [PeliculaService]
})
export class PeliculasComponent {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;

  constructor(private _peliculaService: PeliculaService) {
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8 , 12);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente iniciado!!");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
    console.log("DOCHECK LANZADO !!!");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado!!";
  }

  ngOnDestroy() {
    console.log("EL COMPONENTE SE VA A ELIMINAR !!!");
  }

  mostrarFavorita(event:any) {
    this.favorita = event.pelicula;
  }

}
