import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtocartsecondPageRoutingModule } from './addtocartsecond-routing.module';

import { AddtocartsecondPage } from './addtocartsecond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtocartsecondPageRoutingModule
  ],
  declarations: [AddtocartsecondPage]
})
export class AddtocartsecondPageModule {}
