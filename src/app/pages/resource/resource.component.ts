import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../services/resource/resource.service';
import { House } from 'src/app/models/house.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  typeResource: string;
  
  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {
    this.typeResource = this.router.url.substring(1, this.router.url.length);
    console.log("hanh: ", this.typeResource)
  }

  ngOnInit(): void {
  }
}
