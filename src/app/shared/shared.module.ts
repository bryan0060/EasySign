import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LoginInputComponent,
    LogoComponent,
    HeaderComponent,
  ],
  exports: [
    LoginInputComponent,
    LogoComponent,
    HeaderComponent,
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
