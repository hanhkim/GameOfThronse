import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../services/resource/resource.service';
import { House } from 'src/app/models/house.model';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  HousesList: Array<House>;
  
  constructor(
    private resourceService: ResourceService
  ) {
    this.loadCharacter();
  }

  ngOnInit(): void {
  }

  loadCharacter() {
    this.resourceService.loadListHouses()
        .subscribe(data => {
          this.HousesList = data;
        })
  }
}
