import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableaubordComponent } from './tableaubord/tableaubord.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SidebarComponent } from './tableaubord/sidebar/sidebar.component';
import { StatistiquesComponent } from './tableaubord/statistiques/statistiques.component';
import {ChartModule} from "angular-highcharts";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CartographieComponent,
    AccueilComponent,
    TableaubordComponent,
    LoginComponent,
    SidebarComponent,
    StatistiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
