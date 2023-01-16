import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute, ParamMap } from '@angular/router';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';


import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost: Entry<any>;
  blogPostText:  any[];
  blogPostVideos: any[] = [];
   safeSrc: SafeResourceUrl;
   videos: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
   
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.contentfulService.getBlogPost(params.get('slug')as string)))
      .subscribe(blogPost => {
        this.blogPost = blogPost;
      // this.videos = blogPost.fields.youTubeVideoUrl;
        //this.blogPostText = blogPost.fields.blogPostText;
       // this.blogPostVideos = blogPost.fields.blogPostVideo;
       //this.youTubeVideoUrl = blogPost.fields.youTubeVideoUrl;
      }
      );
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");

    

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
