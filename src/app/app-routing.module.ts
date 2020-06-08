import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ConteudoHomeComponent } from './conteudo-home/conteudo-home.component';

const routes: Routes = [
  {path : 'home', component: ConteudoHomeComponent},
  {path : 'contato', component: ContatoComponent},
  {path : '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
