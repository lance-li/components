/**
 * Created by Administrator on 2017/3/3.
 */
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { ContentPageComponent } from './content-page.component';
import { SignInComponent }  from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const ContenPagetroutes: Routes = [
  {
    path:'',
    component: ContentPageComponent,
    children:[
      {path: '', redirectTo: 'signIn', pathMatch: 'full'},
      { path:'signIn',     component: SignInComponent},
      { path:'signUp',     component: SignUpComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ContenPagetroutes)],
  exports: [ RouterModule ]
})
export class ContentPageRouterModule {}
