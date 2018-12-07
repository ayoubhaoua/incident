import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteConfigLoadStart, Router } from '@angular/router';
import {CartographieComponent} from "./cartographie/cartographie.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {TableaubordComponent} from "./tableaubord/tableaubord.component";
import {LoginComponent} from "./login/login.component";
import {StatistiquesComponent} from "./tableaubord/statistiques/statistiques.component";
import { NavigationComponent } from './navigation/navigation.component';
import { MesincidentComponent } from './mesincident/mesincident.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { IncidentsComponent } from './adminstration/incidents/incidents.component';


const routes: Routes = [
  {
    path:'cartographie',
    component: CartographieComponent
  },
  {
    path:'accueil',
    component: AccueilComponent
  },
  {
    path:'incident',
    component: MesincidentComponent
  },
  {
    path:'administration',
    component:AdminstrationComponent
  },
  
  {
    path:'tableaubord',
    component: TableaubordComponent,
    children:[
      { path: 'stat', component: StatistiquesComponent }
    ]
  },
  {
    path:'',
    redirectTo : "/accueil(navBar:nav)",
    pathMatch: 'full'
  },
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'nav',
    component: NavigationComponent,
    outlet:"navBar"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
