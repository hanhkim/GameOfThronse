import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSmile = faSmile;
  constructor() { }

  ngOnInit(): void {
  }

}
