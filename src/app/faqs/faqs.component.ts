import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  // define private class properties
  faqs: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getFaq()
      .then(faqs => this.faqs = faqs)
  }

}
