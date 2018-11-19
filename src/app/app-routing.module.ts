import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartographieComponent} from "./cartographie/cartographie.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {TableaubordComponent} from "./tableaubord/tableaubord.component";
import {LoginComponent} from "./login/login.component";
import {StatistiquesComponent} from "./tableaubord/statistiques/statistiques.component";
const routes: Routes = [
  {
    path:'cartographie',
    component: CartographieComponent
  },
  {
    path:'accueil',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path:'tableaubord',
    component: TableaubordComponent,
    children:[
      { path: 'stat', component: StatistiquesComponent }
    ]
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
