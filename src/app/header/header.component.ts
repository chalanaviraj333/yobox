import { Component, Input, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/cartservice.service';
import { ModalService } from 'src/app/modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() public headerURL: string;
  @Input() public headerTitle: string;
  @Input() public smallHeaderTitle: string;

  constructor(public modalService: ModalService, public cartService: CartserviceService) { }

  ngOnInit() {}

  async _onClickSearch() {
    await this.modalService.onClickSearch();

  }

}
