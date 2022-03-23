import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './listado/listado.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { ContenidoDatosComponent } from './contenido-datos/contenido-datos.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoComponent,
    BotoneraComponent,
    ContenidoDatosComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
