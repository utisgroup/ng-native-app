import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'native-app';
  details: any  = [];

  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getDetails().subscribe(res => {
      console.log('get details =', res);
    })
  }
}
