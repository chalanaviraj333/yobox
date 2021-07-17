import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderagainPage } from './orderagain.page';

const routes: Routes = [
  {
    path: '',
    component: OrderagainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderagainPageRoutingModule {}
