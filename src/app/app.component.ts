import { Component, VERSION } from '@angular/core';
//version comes from marked pipe
// see https://www.techiediaries.com/angular-10-markdown-custom-pipe/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'sid-app2';

  name = 'Angular ' + VERSION.major;

  public title: string = '*Angular 10 Markdown Pipe*';
  public content: string = '**Markdown** is cool!';
}
