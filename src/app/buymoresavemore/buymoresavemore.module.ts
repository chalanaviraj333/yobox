import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuymoresavemorePageRoutingModule } from './buymoresavemore-routing.module';

import { BuymoresavemorePage } from './buymoresavemore.page';
import { SubheaderComponent } from '../subheader/subheader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuymoresavemorePageRoutingModule
  ],
  declarations: [BuymoresavemorePage,SubheaderComponent]
})
export class BuymoresavemorePageModule {}
