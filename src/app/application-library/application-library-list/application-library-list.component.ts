import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-library-list',
  templateUrl: './application-library-list.component.html',
  styleUrls: ['./application-library-list.component.scss']
})
export class ApplicationLibraryListComponent implements OnInit {
  appData = [
    {
      image: 'assets/images/common/application-library/core-logic.jpg',
      app: 'Core Logic',
      description: 'Property data and research',
      assignments: 'Collections, Inspections and three others.',
      usage: '2,107 Clicks', icons: 'assets/images/common/nav-icon.jpg'
    },
    {
      image: 'assets/images/common/application-library/inhabit.jpg',
      app: 'Property',
      description: 'Property data and research',
      assignments: 'Collections, Inspections and three others.',
      usage: '2,107 Clicks',
      icons: 'assets/images/common/nav-icon.jpg'
    },
    {
      image: 'assets/images/common/application-library/property-value.jpg',
      app: 'Core Logic',
      description: 'Property data and research',
      assignments: 'Collections, Inspections and three others.',
      usage: '2,107 Clicks', icons: 'assets/images/common/nav-icon.jpg'
    },
    {
      image: 'assets/images/common/application-library/property-iq.jpg',
      app: 'Property',
      description: 'Property data and research',
      assignments: 'Collections, Inspections and three others.',
      usage: '2,107 Clicks',
      icons: 'assets/images/common/nav-icon.jpg'
    },
    {
      image: 'assets/images/common/application-library/deft.jpg',
      app: 'Core Logic',
      description: 'Property data and research',
      assignments: 'Collections, Inspections and three others.',
      usage: '2,107 Clicks',
      icons: 'assets/images/common/nav-icon.jpg'
    },
    {
      image: 'assets/images/common/application-library/my-staff.jpg',
      app: 'Property',
      description: 'Property data and research',
      assignments: 'Collections, Inspections and three others.',
      usage: '2,107 Clicks',
      icons: 'assets/images/common/nav-icon.jpg'
    },
  ];
  columnsToDisplay: string[] = ['image', 'app', 'description', 'assignments', 'usage', 'icons'];
  dataSource = this.appData;
  constructor() { }

  ngOnInit(): void {
  }

}
