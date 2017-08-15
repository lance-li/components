import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  TableDrictionComponent,
  SlidetoggleComponent,
} from './components';


const IC_COMPONENTS = [
  TableDrictionComponent ,
  SlidetoggleComponent,
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...IC_COMPONENTS,
  ],
  exports: [
    ...IC_COMPONENTS,
  ]
})
export class IndependentComponentsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: IndependentComponentsModule,
      providers: [

      ],
    };
  }
}
