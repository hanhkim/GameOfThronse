import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSmile = faSmile;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
