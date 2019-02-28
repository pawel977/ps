import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navsItem = [
    {
      name : 'Technologie',
      link : '#'
    },
    {
      name : 'kursy',
      link : '#'
    }
  ];
  constructor() { }

  ngOnInit() {
  console.log(this.navsItem.length + ' ' + this.navsItem[0].name )
  }

}
