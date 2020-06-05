import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../services/resource/resource.service';
import { House } from 'src/app/models/house.model';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  typeResource: string;
  faSearch = faSearch;
  textSearch:string; 

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {
    this.typeResource = this.router.url.substring(1, this.router.url.length);
  }

  ngOnInit(): void {
  }
}
