import { Component, OnInit } from '@angular/core';
import { NasaService } from './shared/services/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public imgOfTheDay: string;
  private service: NasaService;

  constructor(nasaService: NasaService) {
    this.imgOfTheDay = '';
    this.service = nasaService;
  }

  ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe((nasaImg) => {
      this.imgOfTheDay = nasaImg;
    });
  }
}
