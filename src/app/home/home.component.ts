import { Component, OnInit } from '@angular/core';

//Contentful
import { ContentfulService } from '../contentful.service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // define private class properties
  homePagePageBannerTickPointss: Entry<any>[] = [];
  homePageIntros: Entry<any>[] = [];
  //homePageBannerTickPoint1: Entry<any>[] = [];
  showLink = false;


  constructor(private contentfulService: ContentfulService) {

  }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getHomePageIntro()
      .then(homePageIntros => this.homePageIntros = homePageIntros)

  }

  reviews = [

    {
      name: 'Garry Ward',
      date: '2 months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value.',
      mainText: 'Really happy with the work and response time.  We had an emergency repair needed and Sid was out exactly when he said he would be. Completed the job to a high standard, and did full inspection through the house to ensure no other issues had arisen.This gave us confidence and reassurance.Highly recommended.'
    },
    {
      name: 'Rachel Somers',
      date: '2 months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value.',
      mainText: 'I would highly recommend Sids Plumbing service. At very short notice Sid helped me out with a leak eventhough he was up to his eyes.He was very efficient and definitely knew his profession.Would have no qualms about recommending him.'
    },
    {
      name: 'David Gerla',
      date: '3 months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value',
      mainText: "Have used Sid's Plumbing twice in the past two weeks for two different plumbing issues (one an emergency, one not). Both times I received responsive, professional, and effective service. I will definitely use them again."
    },
    {
      name: 'Francine Shelly',
      date: 'a months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value.',
      mainText: "Sid's Plumbing is an excellent service . Reliable efficent ,professional and friendly.  Very impressive . I will be sharing his number with everyone I know! Thanks for the great work !"
    }];

  tests = [

    {
      name: "Helen O'Reilly",
      date: '2 months ago',
      positives: 'Positive: Professionalism, Punctuality, Quality, Responsiveness, Value.',
      mainText: "Had a leaking boiler in the hotpress, found it at about 4 am.Rang Sid at 7 am, he  checked had we turned off the water, we had, so said he would be here between 10 and 10.30.He arrived just before 10. Gave me quote and had me back with cold water, called the following day and I was sorted by lunchtime.highly recommend Sid"
    },
    {
      name: 'Frank Kennedy',
      date: '4 months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value',
      mainText: "I had a burst pipe from an upstairs sink.Water pouring down onto the ceiling below.I found Sid's number online and called him. He was just finishing another job but raced over to me in a few minutes and stopped the leak immediately and fixed the damaged pipe which was very awkwardly placed beneath some tiles. Fantastic response and terrific quality of work. Also - a lovely chap clearly with decades of experience. I couldn't rate him highly enough!"
    },
    {
      name: 'Alex Mulvagh ',
      date: '3 months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value',
      mainText: "Sid was fantastic.. Good communication, very pleasant to deal with, fitted me in quickly, and got the job done!! Would highly recommend..."
    },
    {
      name: 'Colette Dunne Green',
      date: '3 months ago',
      positives: 'Professionalism, Punctuality, Quality, Responsiveness, Value',
      mainText: "Sid is a very good  and efficient  plumber he turned up when he said he would and got everything sorted, thank again"
    },
    {
      name: 'Krystian Kunowski',
      date: '2 months ago',
      positives: 'Professionalism, Punctuality, Quality',
      mainText: "Leak was located and repaired very quickly, very professional approach and great personal culture."
    },
    {
      name: 'Diana Stuparu',
      date: '5 months ago',
      positives: 'Professionalism',
      mainText: "Thank you Sid’s Plumbing for your help and professionalism, and thank you for being so patient with me, I am a women and obviously I know nothing about plumbing, Thank you for fixing my water pressure. God bless you!"
    },
    {
      name: 'Christine Mason',
      date: '7 months ago',
      positives: 'Professionalism',
      mainText: "As we are in isolatIon Sid took the time to face time my husband and myself and talk us through managing the problem of a leaking water cylinder. He is a very professional, helpful and friendly man who went above and beyond to help us. We will definitely be contacting him to replace the cylinder when the pandemic restrictions are ended. Thank you so much for your help Sid."
    },
    {
      name: 'JK Donabate',
      date: '6 months ago',
      positives: 'Professionalism, Quality, Responsiveness',
      mainText: "Sid really helped us out when we were experiencing a leak and helped get things under control. He contacted us immediately and was very knowledgeable so a big thanks to him! Would recommend."
    }
  ];

  toggleLink(): void {
    this.showLink = !this.showLink;
  }
}

