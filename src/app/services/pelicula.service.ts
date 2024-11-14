import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/16:9/w_1920,h_1080,c_limit/mejor%20spider-man%20pelicula%20sony%20marvel.jpg"),
            new Pelicula("Los vengadores Endgame", 2018 , "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp"),
            new Pelicula("Batman vs Superman", 2015, "https://images.ecestaticos.com/iPpZiNZ7UdxSu__vCjyamtKdk6E=/2x0:1279x718/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F578%2F59e%2F1c3%2F57859e1c30d7f9871400ceb3512cb9e7.jpg")
          ];
    }

    holaMundo() {
        return 'Hola mundo desde un servicio de Angular !!';
    }

    getPeliculas() {
        return this.peliculas;
    }
}