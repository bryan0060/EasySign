import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp } from 'firebase/app';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Configuración de firebase de la aplicación web

export const firebaseConfig = {
  apiKey: "AIzaSyAFWcYZtMjKCLd1tkFL9M1GG6rTgfQfP5g",
  authDomain: "easysign-2d344.firebaseapp.com",
  projectId: "easysign-2d344",
  storageBucket: "easysign-2d344.firebasestorage.app",
  messagingSenderId: "797299177680",
  appId: "1:797299177680:web:4841e6125dd58a040646d5",
  measurementId: "G-REB1GCD8ZX"
};

const app = initializeApp(firebaseConfig);



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot({mode: 'md'}),
     AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
