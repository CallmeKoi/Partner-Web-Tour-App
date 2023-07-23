import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromoComponent } from './promo/promo.component';
import { TourComponent } from './tour/tour.component';
import { BsPerformComponent } from './bs-perform/bs-perform.component';
import { AccountComponent } from './account/account.component';
import { InfoListComponent } from './account/info-list/info-list.component';
import { PartnerInfoComponent } from './account/partner-info/partner-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PromoComponent,
    TourComponent,
    BsPerformComponent,
    AccountComponent,
    InfoListComponent,
    PartnerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
