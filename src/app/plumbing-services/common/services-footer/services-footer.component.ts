import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../../../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-services-footer',
  templateUrl: './services-footer.component.html',
  styleUrls: ['./services-footer.component.scss']
})
export class ServicesFooterComponent implements OnInit {

  servicesFooters: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.contentfulService.getServicesFooter()
      .then(servicesFooters => this.servicesFooters = servicesFooters)  //Area Intro


  }
}
