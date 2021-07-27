import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'searchpage',
    loadChildren: () => import('./searchpage/searchpage.module').then( m => m.SearchpagePageModule)
  },
  {
    path: 'cart',
    // loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),canLoad: [AuthGuard]
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'addtocartsecond',
    loadChildren: () => import('./addtocartsecond/addtocartsecond.module').then( m => m.AddtocartsecondPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'termsandconditions',
    loadChildren: () => import('./termsandconditions/termsandconditions.module').then( m => m.TermsandconditionsPageModule)
  },
  {
    path: 'loggeduserpoints',
    loadChildren: () => import('./loggeduserpoints/loggeduserpoints.module').then( m => m.LoggeduserpointsPageModule)
  },
  {
    path: 'memberdeals',
    loadChildren: () => import('./memberdeals/memberdeals.module').then( m => m.MemberdealsPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'filtermodalpage',
    loadChildren: () => import('./filtermodalpage/filtermodalpage.module').then( m => m.FiltermodalpagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
