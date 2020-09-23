import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  page: string;
  title: string;
  constructor(private router:Router) { }
  
  ngOnInit(): void {
    if (this.router.url.indexOf('/application-library') > -1){
      this.title = "Application Library";
    }
    if (this.router.url.indexOf('/staff-summary') > -1) {
      this.title = "Staff Summery";
    }
    if (this.router.url.indexOf('/staff-overview') > -1) {
      this.title = "Staff Overview";
    }
    if (this.router.url.indexOf('/macquarie-today') > -1) {
      this.title = "Macquarie today";
      this.page = 'true';
    }

  }

}
