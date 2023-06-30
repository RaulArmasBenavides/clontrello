import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadersmallComponent } from './loadersmall/loadersmall.component';



@NgModule({
  declarations: [
    LoadersmallComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadersmallComponent
  ]
})
export class SharedModule { }
