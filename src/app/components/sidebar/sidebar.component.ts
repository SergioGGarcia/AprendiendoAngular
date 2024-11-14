import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public searchString!: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {

  }

  goSearch() {
    this._router.navigate(['/buscar', this.searchString]);
  }

}
