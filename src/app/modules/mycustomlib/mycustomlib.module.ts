import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MycustomlibComponent} from './mycustomlib.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MycustomlibComponent
  ],
  exports: [
    MycustomlibComponent
  ]
})
export class MycustomlibModule {
}
