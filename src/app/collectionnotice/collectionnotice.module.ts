import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionnoticePageRoutingModule } from './collectionnotice-routing.module';

import { CollectionnoticePage } from './collectionnotice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionnoticePageRoutingModule
  ],
  declarations: [CollectionnoticePage]
})
export class CollectionnoticePageModule {}
