import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { ImageOfTheDay } from './nasa.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  imageOfTheDay!: string;
  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((data: ImageOfTheDay) => {
        this.imageOfTheDay = data.url;
    })
  }

}
