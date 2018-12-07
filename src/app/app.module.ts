import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableaubordComponent } from './tableaubord/tableaubord.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SidebarComponent } from './tableaubord/sidebar/sidebar.component';
import { StatistiquesComponent } from './tableaubord/statistiques/statistiques.component';
import {ChartModule} from "angular-highcharts";
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AppService} from "./app.service";
import {XhrInterceptor} from "./xhr.interceptor";
import {CookieService} from  "ngx-cookie-service";
import { MesincidentComponent } from './mesincident/mesincident.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { AsidebarComponent } from './adminstration/asidebar/asidebar.component';
import { IncidentsComponent } from './adminstration/incidents/incidents.component';
import { ModalComponent } from './modal/modal.component';
import { TestComponent } from './adminstration/test/test.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CartographieComponent,
    AccueilComponent,
    TableaubordComponent,
    LoginComponent,
    SidebarComponent,
    StatistiquesComponent,
    IncidentsComponent,
    MesincidentComponent,
    AdminstrationComponent,
    AsidebarComponent,
    ModalComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    ChartModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
