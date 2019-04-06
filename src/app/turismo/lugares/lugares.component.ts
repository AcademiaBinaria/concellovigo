import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  public lugares$: Observable<Lugar[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const url = 'http://datos.vigo.org/data/turismo/poi-lugares-es.json';
    this.lugares$ = this.httpClient
      .get<Lugar[]>(url)
      .pipe(
        map(lugares =>
          lugares.filter(lugar => lugar.description && lugar.image_uri).sort((a, b) => a.title.localeCompare(b.title))
        )
      );
  }
}

export interface Lugar {
  phone?: any;
  lon: number;
  subcategoria: string;
  layer: string;
  web?: any;
  postcode: string;
  type: number;
  lang: string;
  title: string;
  idpoi: number;
  address: string;
  image_uri: string;
  description: string;
  tipo: string;
  lat: number;
  mp3_uri: string;
}
