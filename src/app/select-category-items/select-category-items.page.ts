import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-category-items',
  templateUrl: './select-category-items.page.html',
  styleUrls: ['./select-category-items.page.scss'],
})
export class SelectCategoryItemsPage implements OnInit {

  public headerTitle: string = '';

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("selectedCategory")) {
        // redirect
        return;
      }
      this.headerTitle = paramMap.get("selectedCategory");
      console.log(this.headerTitle);
    });
  }

  ngOnInit() {
  }

}
