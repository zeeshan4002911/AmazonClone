import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view.component';

const route: Routes = [{ path: ':name/:id', component: ProductViewComponent }];

@NgModule({
  declarations: [ProductViewComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ProductViewModule {}
