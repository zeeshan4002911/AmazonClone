import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ProductViewComponent } from './modules/product-view/product-view.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'productList',
        component: ProductListComponent,
      },
      {
        path: 'productView/:name/:id',
        component: ProductViewComponent,
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
