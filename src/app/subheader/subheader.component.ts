import { Component, Input, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {

  @Input() public subHeaderTitle: string;
  @Input() public backButtonRedirect: string;

  constructor(public cartService: CartserviceService, private modalService: ModalService) { }

  ngOnInit() {}

  async _onClickSearch() {
    await this.modalService.onClickSearch();

  }

}
