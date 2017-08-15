import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';



import { MaiFunctionComponent } from './main-function.component';
import { CommendComponent } from './commend/commend.component'
const MaiFunctiontroutes: Routes = [
  {
    path:'',
    component: MaiFunctionComponent,
    children:[
      {path: '', redirectTo: 'commend', pathMatch: 'full'},
      { path:'commend',     component: CommendComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(MaiFunctiontroutes)],
  exports: [ RouterModule ]
})
export class MaiFunctionRouterModule {}
