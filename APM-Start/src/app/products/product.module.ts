import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductRoutes } from '../shared/Routes/Routes';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ProductRoutes)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
