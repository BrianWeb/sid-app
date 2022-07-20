import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { PlumbingServicesComponent } from './plumbing-services/plumbing-services.component';
import { PlumbingServicesDublinComponent } from './plumbing-services/plumbing-services-dublin/plumbing-services-dublin.component';
import { BoilerInstallationComponent } from './plumbing-services/boiler-installation/boiler-installation.component';
import { LeakDetectionComponent } from './plumbing-services/leak-detection/leak-detection.component';
import { HeatingServicesComponent } from './plumbing-services/heating-services/heating-services.component';
import { ServicesFooterComponent } from './plumbing-services/common/services-footer/services-footer.component';
import { ServicesMainComponent } from './plumbing-services/common/services-main/services-main.component';
import { ServicesSidebarComponent } from './plumbing-services/common/services-sidebar/services-sidebar.component';

import { AreasComponent } from './areas/areas.component';
import { AreaDetailComponent } from './areas/area-detail/area-detail.component';
import { AreasSidebarComponent } from './areas/areas-sidebar/areas-sidebar.component';

import { FaqsComponent } from './faqs/faqs.component';
import { EmergencyPlumbingPricesComponent } from './emergency-plumbing-prices/emergency-plumbing-prices.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { ContactDublinPlumberComponent } from './contact-dublin-plumber/contact-dublin-plumber.component';
import { NonEmergencyPlumbingPricesComponent } from './non-emergency-plumbing-prices/non-emergency-plumbing-prices.component';
import { FooterComponent } from './common/footer/footer.component';
import { BlogComponent } from './blog/blog.component';

//Contentful:
// import the new Contentful service
import { ContentfulService } from './contentful.service/contentful.service';

import { ContactService } from './common/contact.service';

//Markdown
//import { NgxMdModule } from 'ngx-md';


//Showdown Markdown
//import { ShowdownModule } from 'ngx-showdown';


//import { HttpClientModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogSidebarComponent } from './blog/blog-sidebar/blog-sidebar.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessComponent } from './common/contact-form/success/success.component';
import { PageNotFoundComponent } from './common/contact-form/page-not-found/page-not-found.component';
import { ContactComponent } from './common/contact-form/contact/contact.component';

import { MarkdownPipe } from './markdown.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PlumbingServicesComponent,
    HomeComponent,
    PlumbingServicesDublinComponent,
    BoilerInstallationComponent,
    LeakDetectionComponent,
    HeatingServicesComponent,
    ServicesFooterComponent,
    ServicesMainComponent,
    ServicesSidebarComponent,
    AreasSidebarComponent,
    FaqsComponent,
    EmergencyPlumbingPricesComponent,
    AboutUsComponent,
    ContactDublinPlumberComponent,
    NonEmergencyPlumbingPricesComponent,
    FooterComponent,
    BlogComponent,
    AreaDetailComponent,
    AreasComponent,
    BlogPostComponent,
    BlogSidebarComponent,
    SuccessComponent,
    PageNotFoundComponent,
    ContactComponent,
    MarkdownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Markdown
    //NgxMdModule.forRoot(),

    //showdown Markdown
    //ShowdownModule,

    NoopAnimationsModule,

    BrowserAnimationsModule


    
  ],
  providers: [ContentfulService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
