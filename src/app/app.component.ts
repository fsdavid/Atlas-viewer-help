import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pages: string[] = ['navigation', 'search', 'api']
  activePage: string = ''

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (!params['help']) {
        this.activePage = ''
      } else if (params['help'] !== this.activePage) {
        if (!this.pages.includes(params['help'])) {
          this.activePage = ''
        } else {
          this.activePage = params['help']
        }
      }
    });
  }

  pageChanged(event) {
    if (event === '') {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.pushState({path:newurl},'',newurl);
      this.activePage = event;
    } else this.activePage = event;
  }



}
