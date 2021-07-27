import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then( m => m.MorePageModule)
      },
      {
        path: 'tab1/specialoffers',
        loadChildren: () => import('../specialoffers/specialoffers.module').then( m => m.SpecialoffersPageModule)
      },
      {
        path: 'tab1/orderagain',
        loadChildren: () => import('../orderagain/orderagain.module').then( m => m.OrderagainPageModule)
      },
      {
        path: 'tab2/selectcategoryitems/:selectedCategory',
        loadChildren: () => import('../select-category-items/select-category-items.module').then( m => m.SelectCategoryItemsPageModule)
      },
      {
        path: 'tab3/buymoresavemore',
        loadChildren: () => import('../buymoresavemore/buymoresavemore.module').then( m => m.BuymoresavemorePageModule)
      },
      {
        path: 'more/myprofile',
        loadChildren: () => import('../myprofile/myprofile.module').then( m => m.MyprofilePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
