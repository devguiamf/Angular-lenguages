import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VidasComponent } from './vidas/vidas.component';
import { BarraComponent } from './barra/barra.component';

//Materials
import {MatCardModule} from '@angular/material/card';
import { InglesComponent } from './ingles/ingles.component'
import {MatButtonModule} from '@angular/material/button'
import {MatProgressBarModule} from '@angular/material/progress-bar'


@NgModule({
  declarations: [
    AppComponent,
    VidasComponent,
    BarraComponent,
    InglesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
