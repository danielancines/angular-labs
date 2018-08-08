import { Component, OnInit } from '@angular/core';
import { Title } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title: Title;
  content = 'Welcome do Meat App!';

  constructor() { }

  ngOnInit() {
    // this.title.setTitle('Meat Application - Alfa');
  }

}
