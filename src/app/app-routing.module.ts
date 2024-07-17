import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'preline',
    loadChildren: () =>
      import('./preline/preline.module').then((m) => m.PrelineModule),
  },
  {
    path: '',
    redirectTo: 'preline',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'preline',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
