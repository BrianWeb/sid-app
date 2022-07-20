// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: 'hd2itpa5txrc',
  accessToken: 'jI6x6KXWxEFmCLBxEynkTp8ywZ782ZK9T3ThGVeGW_A',

  contentTypeIds: {
    homePageIntro: 'homePageIntro',
    areasPage: 'areasPage',
    area: 'area',
    servicesFooter: 'servicesFooter',
    faq: 'faq',
    blogPost: 'blogPost',
    blogPostText: 'blogPost.fields.blogPostText'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });


  constructor() { }

  //HOME PAGE
  getHomePageIntro(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.homePageIntro
    }, query))
      .then(res => res.items);
  }

  //SERVICES

  getServicesFooter(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.servicesFooter
    }, query))
      .then(res => res.items);
  }

  //FAQ

  getFaq(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.faq
    }, query))
      .then(res => res.items);
  }

  //AREAS PAGE
  getAreasPage(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.areasPage
    }, query))
      .then(res => res.items);
  }


  // fetch areas
  getAreas(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.area,
      order: 'fields.id'
    }, query))
      .then(res => res.items);
  }


  // fetch products with a given slug
  // and return one of them
  getArea(slug: string): Promise<Entry<any>> {
    return this.getAreas({ 'fields.slug': slug })
      .then(items => items[0])
  }

  //BLOG

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blogPost
    }, query))
      .then(res => res.items);
  }


  // fetch blog with a given slug
  // and return one of them
  getBlogPost(slug: string): Promise<Entry<string>> {
    return this.getBlogPosts({ 'fields.slug': slug })
      .then(items => items[0])
  }


}
