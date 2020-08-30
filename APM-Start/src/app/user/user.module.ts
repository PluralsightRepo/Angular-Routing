import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { UserRoutes } from '../shared/Routes/Routes';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
