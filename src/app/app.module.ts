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
import { InglesComponent } from './linguas/ingles/ingles.component'
import {MatButtonModule} from '@angular/material/button'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PainelComponent } from './painel/painel.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlemaoComponent } from './linguas/alemao/alemao.component';
import { EspanholComponent } from './linguas/espanhol/espanhol.component';
import { ChinesComponent } from './linguas/chines/chines.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VidasComponent,
    BarraComponent,
    InglesComponent,
    PainelComponent,
    AlemaoComponent,
    EspanholComponent,
    ChinesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
