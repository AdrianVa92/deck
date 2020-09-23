import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-staff-summary-list',
  templateUrl: './staff-summary-list.component.html',
  styleUrls: ['./staff-summary-list.component.scss']
})


export class StaffSummaryListComponent implements OnInit {

  staffData = [
    {
      image: 'assets/images/content/staff/staff.png',
      name: 'June Marbahy',
      role: 'Marketing Specialist 1',
      team: 'Marketing',
      activity: 'Blog articles',
      rating: 4,
      dreampoints: 32223,
      tenure: '2 years'
    },
    {
       image: 'assets/images/content/staff/staff.png',
       name: 'John Biegey',
       role: 'SEO Specialist',
       team: 'Marketing',
       activity: 'Site Keywords',
       rating: 5,
       dreampoints: 12233,
       tenure: '5 years'
     },
     {
       image: 'assets/images/content/staff/staff.png',
       name: 'Janet Bayou',
       role: 'Designer',
       team: 'Creative',
       activity: 'Advertising',
       rating: 4,
       dreampoints: 1223,
       tenure: '2 years'
     },
     {
       image: 'assets/images/content/staff/staff.png',
       name: 'Jo Mahuay',
       role: 'Accountant',
       team: 'Finance',
       activity: 'EOY',
       rating: 5,
       dreampoints: 243342,
       tenure: '3 years'
      },
     {
       image: 'assets/images/content/staff/staff.png',
       name: 'Ida Wanhay',
       role: 'Accountant Lead',
       team: 'Finance',
       activity: 'EOY',
       rating: 5,
       dreampoints: 1243342,
       tenure: '6 years'
      },
  ];

  columnsToDisplay: string[] = ['image', 'name', 'role', 'team', 'activity', 'rating', 'dreampoints', 'tenure'];
  dataSource = this.staffData;
  constructor() { }

  ngOnInit(): void {
  }

}
