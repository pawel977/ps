import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('li')
  li: ElementRef;

  navsItem = [
    {
      name : 'Technologie',
      link : '#'
    },
    {
      name : 'kursy',
      link : '#'
    },
    {
      name : 'projekty',
      link : '#'
    },
    {
      name: 'kontakt',
      link : '#'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  addHover(li: ElementRef) {
    li.classList.add('border-top');
    li.classList.add('shadow');
    console.log(1);

  }
  removeHover(li: ElementRef) {
    li.classList.remove('border-top');
    li.classList.remove('shadow');
  }

}
