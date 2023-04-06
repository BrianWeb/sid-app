import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

//To get URL from address bar and give it to this component
import { ActivatedRoute, ParamMap } from '@angular/router';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';


import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

//Meta for populating the page Title, which comes from contentful's pageTitle field
import { Meta } from '@angular/platform-browser';
//see https://www.codeproject.com/Tips/5322155/How-to-Set-HTML-Meta-Tags-in-Angular for more info

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost: Entry<any>;
  blogPostText:  any[];
  //blogPostVideoUrl: any[] = [];
  blogPostVideoUrl: SafeResourceUrl;
  // safeSrc: SafeResourceUrl;


  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private meta: Meta
  ) {
   
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) =>
        this.contentfulService.getBlogPost(params.get('slug') as string)))
      .subscribe(blogPost => {
        this.blogPost = blogPost;
       // console.log(blogPost);
       // console.log("blogpost video url is: " + this.blogPost.fields.youTubeVideoUrl); This works 
        this.blogPostVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.blogPost.fields.youTubeVideoUrl);
        //console.log("blogpost video url is: " + this.blogPostVideoUrl);
      }
      );
      //this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");

    this.meta.addTag({
      name: 'description',
      content: 'This is an article about Angular Meta service'
    });

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
