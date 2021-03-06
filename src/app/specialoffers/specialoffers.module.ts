import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialoffersPageRoutingModule } from './specialoffers-routing.module';

import { SpecialoffersPage } from './specialoffers.page';
import { SubheaderComponent } from '../subheader/subheader.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialoffersPageRoutingModule,
  ],
  declarations: [SpecialoffersPage, SubheaderComponent]
})
export class SpecialoffersPageModule {}
