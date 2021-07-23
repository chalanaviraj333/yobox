import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionnoticePage } from './collectionnotice.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionnoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionnoticePageRoutingModule {}
