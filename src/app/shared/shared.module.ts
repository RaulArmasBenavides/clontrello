import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadersmallComponent } from './components/loadersmall/loadersmall.component';
import { Loader3Component } from './components/loader3/loader3.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    LoadersmallComponent,
    Loader3Component,
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadersmallComponent,
    Loader3Component
  ]
})
export class SharedModule { }
