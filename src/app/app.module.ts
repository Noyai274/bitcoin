import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';
import { PriceChartComponent } from './cmps/price-chart/price-chart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatsComponent,
    ContactComponent,
    HomeComponent,
    ContactDetailsComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactFilterComponent,
    EditContactComponent,
    PriceChartComponent,
    SignupComponent,
    MoveListComponent,
    TransferFundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
