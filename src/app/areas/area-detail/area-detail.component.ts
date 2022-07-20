import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute, ParamMap} from '@angular/router';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';
//import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit {
  area: Entry<any>;


  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap
        .pipe(switchMap((params: ParamMap) => this.contentfulService.getArea(params.get('slug')as string)))
        .subscribe(area => this.area = area);
  }
}
