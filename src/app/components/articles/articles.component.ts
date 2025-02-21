import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  public url: string;

  @Input() articles!: Article[];

  constructor() {
    this.url = Global.url;
  }

  ngOnInit() {
    //console.log(this.articles);
  }

}
