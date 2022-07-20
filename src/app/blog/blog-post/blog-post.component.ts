import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute, ParamMap } from '@angular/router';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost: Entry<any>;
  blogPostText: string;
  blogPostVideos: any[] = [];


  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.contentfulService.getBlogPost(params.get('slug')as string)))
      .subscribe(blogPost => {
        this.blogPost = blogPost;
        //this.blogPostText = blogPost.fields.blogPostText;
       // this.blogPostVideos = blogPost.fields.blogPostVideo;

      }
      );

  }
  /*
  getVideos() {
    let newArrayVideoUrls = this.blogPostVideos.map(function (extractArrayVideoUrls) {
        return extractArrayVideoUrls.fields.file.url;
      })
    let newArrayVideoTitles = this.blogPostVideos.map(function (extractArrayVideoTitles) {
        return extractArrayVideoTitles.fields.title;
      })
  }*/
}
