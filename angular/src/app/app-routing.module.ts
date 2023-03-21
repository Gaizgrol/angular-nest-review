import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('./shop/shop.module')).ShopModule,
  },
  {
    path: 'auth',
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule,
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./admin/admin.module')).AdminModule,
  },
  {
    path: 'cart',
    loadChildren: async () => (await import('./cart/cart.module')).CartModule,
  },
  {
    path: 'profile',
    loadChildren: async () =>
      (await import('./profile/profile.module')).ProfileModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
