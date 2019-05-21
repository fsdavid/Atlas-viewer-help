import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  selectedItem: string = 'Home'
  @ViewChild('HomeP') homeP: ElementRef
  @ViewChild('UrlState') urlState: ElementRef

  constructor() { }

  ngOnInit() {
  }

  scroll(el:HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.urlState.nativeElement.offsetTop - window.scrollY - 100 < 0) {
      this.selectedItem = 'UrlState'
    }
    if ( (this.urlState.nativeElement.offsetTop - window.scrollY) > window.innerHeight) {
      this.selectedItem = 'Home'
    }
  }

}
