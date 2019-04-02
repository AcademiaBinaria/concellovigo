import { Component, OnInit } from '@angular/core';
import { Titulo } from './Titulo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = new Titulo().texto;

  constructor() {}

  ngOnInit() {}
}
