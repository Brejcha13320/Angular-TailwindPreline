import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrelineRoutingModule } from './preline-routing.module';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { BadgesComponent } from './pages/badges/badges.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    CarouselComponent,
    AlertsComponent,
    BadgesComponent
  ],
  imports: [
    CommonModule,
    PrelineRoutingModule
  ]
})
export class PrelineModule { }
