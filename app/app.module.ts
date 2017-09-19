import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';

import { PokemonsModule } from './pokemons/pokemons.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:       [
    BrowserModule,
    PokemonsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations:  [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap:     [ AppComponent ],
})
export class AppModule { }
