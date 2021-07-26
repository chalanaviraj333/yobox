import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OtherService } from '../other.service';

@Component({
  selector: 'app-filtermodalpage',
  templateUrl: './filtermodalpage.page.html',
  styleUrls: ['./filtermodalpage.page.scss'],
})
export class FiltermodalpagePage implements OnInit {

  constructor(private modalController: ModalController, private otherService: OtherService) { }

  ngOnInit() {
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  onClickFilter(selectedfilter) {
    this.otherService.filterButton(selectedfilter);
  }


}
