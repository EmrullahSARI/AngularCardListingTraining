import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'John Smith',
      image: 'https://bulma.io/images/placeholders/1280x960.png',
      username: 'John',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Lorem ipsum',
      image: 'https://bulma.io/images/placeholders/1280x960.png',
      username: 'Lorem',
      content: 'Pellentesque ornare leo vitae velit varius, a posuere mauris interdum.'
    },
    {
      title: 'Pellentesque',
      image: 'https://bulma.io/images/placeholders/1280x960.png',
      username: 'Pellentesque',
      content: 'Aenean ut eros ultrices, elementum purus cursus, vulputate neque.'
    },
    {
      title: 'Aenean ut eros',
      image: 'https://bulma.io/images/placeholders/1280x960.png',
      username: 'Aenean',
      content: 'Donec auctor nulla sed magna viverra, a sollicitudin purus euismod.'
    },
  ];
}
