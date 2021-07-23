import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggeduserpointsPageRoutingModule } from './loggeduserpoints-routing.module';

import { LoggeduserpointsPage } from './loggeduserpoints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggeduserpointsPageRoutingModule
  ],
  declarations: [LoggeduserpointsPage]
})
export class LoggeduserpointsPageModule {}
