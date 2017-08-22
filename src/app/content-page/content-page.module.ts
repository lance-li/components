
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndependentComponentsModule } from '../independent-components/independent-components.module';

import { ContentPageRouterModule } from './content-page.router';
import { ContentPageComponent } from './content-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    ContentPageRouterModule,
    IndependentComponentsModule
  ],
  declarations: [
    ContentPageComponent,
    SignInComponent,
    SignUpComponent,
  ]
})
export class ContentPageModule { }
