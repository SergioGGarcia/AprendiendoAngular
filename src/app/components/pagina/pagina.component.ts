import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {

  public nombre!: string; // nombre! con ! para asegurarle al compilador que se le dará valor a la variable antes de usarla y no de error
  public apellidos!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos'];
    });

  }

  redireccion() {
    this._router.navigate(['/pagina-de-pruebas', 'Sergio', 'García']);
  }

}
