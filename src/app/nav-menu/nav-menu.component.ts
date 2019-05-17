import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  @Output() page = new EventEmitter<string>();

  ngOnInit() {
  }

  navigateTo(page) {
    this.page.emit(page);
    if (page){
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?help='+page;
      window.history.pushState({path:newurl},'',newurl);
    }
  }

  

}
