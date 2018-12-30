import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookFormComponent } from './Book-Form/Book-Form.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollEventModule } from 'ngx-scroll-event';
import { FooterComponent } from './footer/footer.component';
import { OurPatientsSayComponent } from './our-patients-say/our-patients-say.component';
import { PatientTestimonialsComponent } from './Patient-Testimonials/Patient-Testimonials.component';
import { AwardWinningComponent } from './award-winning/award-winning.component';
import { MapComponent } from './map/map.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { TestComponent } from './test/test.component';
import { FeesPackagesComponent } from './fees-packages/fees-packages.component';
import { ResultsComponent } from './results/results.component';
import { WhySpecialComponent } from './why-special/why-special.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BookFormComponent,
      MainContentComponent,
      FooterComponent,
      OurPatientsSayComponent,
      PatientTestimonialsComponent,
      AwardWinningComponent,
      MapComponent,
      HowitworksComponent,
      DoctorProfileComponent,
      TestComponent,
      FeesPackagesComponent,
      ResultsComponent,
      WhySpecialComponent
   ],
   imports: [
      BrowserModule,
      ScrollEventModule,
      ScrollToModule.forRoot(),
      HttpClientModule
   ],
   providers: [
      HttpClientModule
   ],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ]
})
export class AppModule { }
