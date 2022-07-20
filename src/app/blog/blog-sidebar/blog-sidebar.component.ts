import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss']
})
export class BlogSidebarComponent implements OnInit {

  // define private class properties
  blogPosts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { };

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getBlogPosts()
      .then(blogPosts => this.blogPosts = blogPosts)
  }

}






