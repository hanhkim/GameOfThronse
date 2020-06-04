import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/models/house.model';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.scss']
})
export class HouseItemComponent implements OnInit {
  @Input() HouseList: any;
  displayColumn: Array<string> = ["name", "region", "coatOfArms", "words", "currentLord" ];
  dataSource: any;

  constructor(
    private resourceService: ResourceService
  ) { 
    this.resourceService.loadListHouses()
    .subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource)
    })
    
  }

  ngOnInit(): void {
  }

}
