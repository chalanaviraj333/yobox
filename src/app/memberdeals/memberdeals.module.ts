import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberdealsPageRoutingModule } from './memberdeals-routing.module';

import { MemberdealsPage } from './memberdeals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberdealsPageRoutingModule
  ],
  declarations: [MemberdealsPage]
})
export class MemberdealsPageModule {}
