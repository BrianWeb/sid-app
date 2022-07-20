import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../contentful.service/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  // define private class properties
  blogPosts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { };

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getBlogPosts()
      .then(blogPosts => this.blogPosts = blogPosts)
  }

}
