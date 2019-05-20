import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  selectedItem: string = 'Home';

  constructor() { }

  ngOnInit() {
  }

  scroll(el:HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
