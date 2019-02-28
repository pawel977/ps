import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  background: string ="/src/images/header/header-top.jpg";
  constructor() { }

  ngOnInit() {
  }

}
