import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrl: './article-edit.component.css',
  providers: [ArticleService]
})
export class ArticleEditComponent {

  public article: Article;
  public status!: string;
  public url: string;
  public is_edit: boolean;
  public page_title: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient
  ) {
    this.article = new Article('', '', '', '', null);
    this.url = Global.url;
    this.is_edit = true;
    this.page_title = 'Editar artículo';
  }

  ngOnInit() {
    this.getArticle();
  }

  onSubmit(form:NgForm) {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          // Alerta
          swal(
            'Artículo editado!!',
            'El artículo se ha editado correctamente',
            'success'
          );

          this._router.navigate(['/blog/articulo/', this.article._id]);

        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        // Alerta
        swal(
          'Edición fallida!!',
          'El artículo no se ha editado',
          'error'
        );
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

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );

    });
  }
}
