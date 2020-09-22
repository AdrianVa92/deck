import { RouterModule } from '@angular/router';
import { FullModule } from './../full/full.module';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class LandingModule { }
