import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

//Contentful
import { ContentfulService } from '../contentful.service/contentful.service';
import { Entry } from 'contentful';
//import { Variable } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  // define private class properties
  areasPages: Entry<any>[] = [];
  area: Entry<any>;
  //areaNames: Entry<any>[] = [];
  //areaIntro: Entry<any>[] = [];

  pageTitle: 'initial page title';
  //slugVar: Variable;

  //Old activataed Route method:
  //constructor(private contentfulService: ContentfulService,
  //  private route: ActivatedRoute) { console.log( this.route.snapshot.paramMap.get('slug'));}

  constructor(
    private contentfulService: ContentfulService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.contentfulService.getAreasPage()
      .then(areasPages => this.areasPages = areasPages),  //Area Intro

      this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.contentfulService.getArea(params.get('slug') as string)))
        .subscribe(area => this.area = area);
  }

}

