import { NgModule } from '@angular/core';
import { PrimaryRoutes } from './shared/Routes/Routes';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(PrimaryRoutes, { useHash: true} ),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
