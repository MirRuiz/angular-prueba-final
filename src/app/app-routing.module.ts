import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DasboardComponent } from './dashboard/dashboard.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'acerca-de', component:AcercaDeComponent},
  {path: 'dashboard', component:DasboardComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'perfil', component: PerfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
