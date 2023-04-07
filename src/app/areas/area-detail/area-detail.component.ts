import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute, ParamMap } from '@angular/router';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';
//import { Variable } from '@angular/compiler/src/render3/r3_ast';


//Meta for populating the page Title, which comes from contentful's pageTitle field
import { Meta } from '@angular/platform-browser';
//see https://www.codeproject.com/Tips/5322155/How-to-Set-HTML-Meta-Tags-in-Angular for more info


@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit {
  area: Entry<any>;
  areaName: string = "";

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private meta: Meta) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.contentfulService.getArea(params.get('slug') as string)))
      .subscribe(area => {
        this.area = area;
        this.areaName = this.area.fields.areaName;
        console.log(this.areaName + "hello np");
        this.meta.addTag({
          title: 'Emergency Plumber :)' + this.areaName,
          name: 'description',
          content: 'This is an article about Angular Meta service'
        });
      });

    console.log("hi np");
  }
}
