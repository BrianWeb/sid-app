import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

//Services:
import { PlumbingServicesComponent } from './plumbing-services/plumbing-services.component';
import { BoilerInstallationComponent } from './plumbing-services/boiler-installation/boiler-installation.component';
import { HeatingServicesComponent } from './plumbing-services/heating-services/heating-services.component';
import { LeakDetectionComponent } from './plumbing-services/leak-detection/leak-detection.component';
import { PlumbingServicesDublinComponent } from './plumbing-services/plumbing-services-dublin/plumbing-services-dublin.component';

//Areas:
import { AreasComponent } from './areas/areas.component';  
import { AreaDetailComponent } from './areas/area-detail/area-detail.component';

//Rates:
//import { EmergencyPlumbingPricesComponent } from './emergency-plumbing-prices/emergency-plumbing-prices.component';


//Contact:
import { ContactDublinPlumberComponent } from './contact-dublin-plumber/contact-dublin-plumber.component';

import { ContactComponent } from './common/contact-form/contact/contact.component';
import { SuccessComponent } from './common/contact-form/success/success.component';
//import { PageNotFoundComponent } from './common/contact-form/page-not-found/page-not-found.component';

//About:
import { AboutUsComponent } from './common/about-us/about-us.component';

//FAQ:
import { FaqsComponent } from './faqs/faqs.component';

//BLOG:
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';



const routes: Routes = [

  //Services:
  { path: 'plumbing-services', component: PlumbingServicesComponent },
  { path: 'services/boiler-installation', component: BoilerInstallationComponent },
  { path: 'services/leak-detection', component: LeakDetectionComponent  },
  { path: 'services/plumbing-services-dublin', component: PlumbingServicesDublinComponent  },
  { path: 'services/heating-services', component: HeatingServicesComponent },

  //Areas:
  { path: 'areas', component: AreasComponent },
  { path: 'areas/:slug', component: AreaDetailComponent },

  //Rates
  //{ path: 'emergency-plumbing-prices', component: EmergencyPlumbingPricesComponent },
  //{ path: 'non-emergency-plumbing-prices', component: EmergencyPlumbingPricesComponent },

  //Contact
  { path: 'contact-dublin-plumber', component: ContactDublinPlumberComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'success', component: SuccessComponent },

  //About
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about', component: AboutUsComponent },

  //FAQ
  { path: 'faqs', component: FaqsComponent },
  { path: 'faq', component: FaqsComponent },

  //BLOG
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogComponent },//BlogComponent contains BlogPostComponent. Using BlogComponent because it also has the sidebar menu. 
  { path: 'blog/preview/:slug', component: BlogPostComponent },

  { path: 'home', component: HomeComponent },

  //default for empty urls
  { path: '', component: HomeComponent, pathMatch: 'full' },

  //catch everything other link the user may try to access:
  { path: '**', component: HomeComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
