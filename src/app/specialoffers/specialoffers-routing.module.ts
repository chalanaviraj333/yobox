import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialoffersPage } from './specialoffers.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialoffersPageRoutingModule {}
