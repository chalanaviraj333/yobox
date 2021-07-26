import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltermodalpagePageRoutingModule } from './filtermodalpage-routing.module';

import { FiltermodalpagePage } from './filtermodalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltermodalpagePageRoutingModule
  ],
  declarations: [FiltermodalpagePage]
})
export class FiltermodalpagePageModule {}
