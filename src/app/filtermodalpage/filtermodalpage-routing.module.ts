import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltermodalpagePage } from './filtermodalpage.page';

const routes: Routes = [
  {
    path: '',
    component: FiltermodalpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltermodalpagePageRoutingModule {}
