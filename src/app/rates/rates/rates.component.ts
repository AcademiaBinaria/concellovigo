import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  private urlapi = 'https://api.exchangeratesapi.io/latest';
  public currentEuroRates: any = null;
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.getCurrentEuroRates();
  }
  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.urlapi}?symbols=${currencies}`;
    this.httpClient.get(url).subscribe(resp => this.asignarValor(resp));
    console.log(url);
  }
  private asignarValor(valor) {
    this.currentEuroRates = valor;
    console.log(valor);
  }
}
