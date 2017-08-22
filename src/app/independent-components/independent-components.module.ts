
import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  TableDrictionComponent,
  SlideDoggleComponent,
  LayerComponent,
  TimeSelectComponent,
} from './components';
import { TouchSelectDirective } from './directive/touch-select.directive';




const IC_COMPONENTS = [
  TableDrictionComponent ,
  SlideDoggleComponent,
  LayerComponent,
  TimeSelectComponent,
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...IC_COMPONENTS,
    TouchSelectDirective,
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
