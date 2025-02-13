import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tableData: any = [
    {
      id: 1,
      slideName: 'sample',
      viewSlide: '/slides/sample',
      youtubeLink: 'https://google.com',
    },
  ];
}
