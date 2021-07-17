import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderagainPageRoutingModule } from './orderagain-routing.module';

import { OrderagainPage } from './orderagain.page';
import { SubheaderComponent } from '../subheader/subheader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderagainPageRoutingModule
  ],
  declarations: [OrderagainPage, SubheaderComponent]
})
export class OrderagainPageModule {}
