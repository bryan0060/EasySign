import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    LoginInputComponent,
    LogoComponent,
  ],
  exports: [
    LoginInputComponent,
    LogoComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class SharedModule { }
