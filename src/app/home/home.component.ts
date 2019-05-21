import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faSolarPanel = faSolarPanel;

  constructor() { }

  @Output() page = new EventEmitter<string>();

  ngOnInit() {
  }

  navigateTo(page) {
    this.page.emit(page);
    if (page) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?help='+page;
      window.history.pushState({path:newurl},'',newurl);
    }
  }
}
