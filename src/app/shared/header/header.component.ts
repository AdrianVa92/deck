import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  title: string;
  constructor(private router:Router) { }
  
  ngOnInit(): void {
    if (this.router.url == '/application-library'){
      this.title = "Application Library";
    }
    if (this.router.url == '/staff-summary') {
      this.title = "Staff Summery";
    }
    if (this.router.url == '/staff-overview') {
      this.title = "Staff Overview";
    }


  }

}
