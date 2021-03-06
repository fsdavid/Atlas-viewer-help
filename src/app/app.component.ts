import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pages: string[] = ['interface', 'tutorial', 'api']
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

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    if (!window.location.pathname || window.location.pathname === '/') {
      this.activePage = ''
    }
  }

  pageChanged(event) {
    if (event === '') {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.pushState({path:newurl},'',newurl);
      this.activePage = event;
    } else this.activePage = event;
  }



}
