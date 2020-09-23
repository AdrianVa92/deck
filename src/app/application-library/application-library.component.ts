import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-library',
  templateUrl: './application-library.component.html',
  styleUrls: ['./application-library.component.scss']
})
export class ApplicationLibraryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
