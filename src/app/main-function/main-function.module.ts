import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaiFunctionRouterModule } from './main-function.touter'
import { MaiFunctionComponent } from './main-function.component';
import { CommendComponent } from './commend/commend.component';

@NgModule({
  imports: [
    CommonModule,
    MaiFunctionRouterModule
  ],
  declarations: [
    MaiFunctionComponent,
    CommendComponent
  ]
})
export class MaiFunctionModule { }
