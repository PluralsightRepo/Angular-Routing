import { Route } from '@angular/router';
import { WelcomeComponent } from '../../home/welcome.component';
import { ProductListComponent } from '../../products/product-list.component';
import { ProductDetailComponent } from '../../products/product-detail.component';
import { ProductEditComponent } from '../../products/product-edit/product-edit.component';
import { LoginComponent } from '../../user/login.component';
import { PageNotFoundComponent } from '../../page-not-found.component';

export const PrimaryRoutes: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: '**', component: PageNotFoundComponent }
];

export const ProductRoutes: Route[] = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/edit', component: ProductEditComponent },
];

export const UserRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];
