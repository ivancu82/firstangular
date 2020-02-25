import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RickMortyComponent } from './components/rick-morty/rick-morty.component';
import { RickMortyCharacterComponent } from './components/rick-morty-character/rick-morty-character.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rick-morty', component: RickMortyComponent },
  { path: 'rick-morty/:id', component: RickMortyCharacterComponent },
  { path: 'pipes', component: PipeExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
