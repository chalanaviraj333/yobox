import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuymoresavemorePage } from './buymoresavemore.page';

const routes: Routes = [
  {
    path: '',
    component: BuymoresavemorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuymoresavemorePageRoutingModule {}
