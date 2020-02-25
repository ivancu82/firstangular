import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppPipesModule } from './app-pipes.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { FormsComponent } from './components/forms/forms.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { ListComponent } from './components/list/list.component';
import { ModuleExampleComponent } from './components/module-example/module-example.component';
import { OutputServiceComponent } from './components/output-service/output-service.component';
import { InputServiceComponent } from './components/input-service/input-service.component';
import { RickMortyComponent } from './components/rick-morty/rick-morty.component';
import { HomeComponent } from './components/home/home.component';
import { RickMortyCharacterComponent } from './components/rick-morty-character/rick-morty-character.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FormsComponent,
    InputComponent,
    OutputComponent,
    ListComponent,
    ModuleExampleComponent,
    OutputServiceComponent,
    InputServiceComponent,
    RickMortyComponent,
    HomeComponent,
    RickMortyCharacterComponent,
    PipeExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppPipesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
