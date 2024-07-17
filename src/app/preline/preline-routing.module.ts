import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { BadgesComponent } from './pages/badges/badges.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: '**', redirectTo: 'buttons' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrelineRoutingModule {}
