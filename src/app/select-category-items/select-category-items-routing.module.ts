import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCategoryItemsPage } from './select-category-items.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCategoryItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCategoryItemsPageRoutingModule {}
