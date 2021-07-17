import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCategoryItemsPageRoutingModule } from './select-category-items-routing.module';

import { SelectCategoryItemsPage } from './select-category-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCategoryItemsPageRoutingModule
  ],
  declarations: [SelectCategoryItemsPage]
})
export class SelectCategoryItemsPageModule {}
