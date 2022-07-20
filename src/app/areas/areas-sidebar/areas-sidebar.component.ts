import { Component, OnInit } from '@angular/core';
//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-areas-sidebar',
  templateUrl: './areas-sidebar.component.html',
  styleUrls: ['./areas-sidebar.component.scss']
})
export class AreasSidebarComponent implements OnInit {
  areas: Entry<any>[] = [];


  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.contentfulService.getAreas()
      .then(areas => this.areas = areas)//Area Details

  }

}
