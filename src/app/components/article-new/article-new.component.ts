import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css',
  providers: [ArticleService]
})
export class ArticleNewComponent {

  public article: Article;
  public status!: string;
  public url: string;
  public page_title: string;
  public is_edit: boolean;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient
  ) {
    this.article = new Article('', '', '', '', null);
    this.url = Global.url;
    this.page_title = 'Crear artículo';
    this.is_edit = false;
  }

  onSubmit(form:NgForm) {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          // Alerta
          swal(
            'Artículo creado!!',
            'El artículo se ha creado correctamente',
            'success'
          );

          this._router.navigate(['/blog']);

        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  // Método que subé la imagen al backend y guarda el nombre de la imagen en el backend
  imageUpload(data: any) {
    const image = data.target.files[0];
    console.log(image);

    const formData = new FormData();
    formData.append('file0', image);

    this._http.post(this.url + 'upload-image', formData).subscribe(
      response => {
        this.status = 'success';
        let objeto_imagen = Object.values(response);
        this.article.image = objeto_imagen[1];
        console.log(this.article);
      },
      error => {
        console.log(error);
        this.status = 'error';
        console.log(formData);
      }
    );
  }

}
