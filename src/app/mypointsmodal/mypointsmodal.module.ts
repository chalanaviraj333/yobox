import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypointsmodalPageRoutingModule } from './mypointsmodal-routing.module';

import { MypointsmodalPage } from './mypointsmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypointsmodalPageRoutingModule
  ],
  declarations: [MypointsmodalPage]
})
export class MypointsmodalPageModule {}
