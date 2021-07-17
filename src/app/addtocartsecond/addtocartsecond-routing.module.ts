import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtocartsecondPage } from './addtocartsecond.page';

const routes: Routes = [
  {
    path: '',
    component: AddtocartsecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtocartsecondPageRoutingModule {}
