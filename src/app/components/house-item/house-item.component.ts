import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/models/house.model';
import { ResourceService } from 'src/app/services/resource/resource.service';
import { MatTableDataSource } from '@angular/material/table';

const houseColumn = ["name", "region", "coatOfArms", "words" ];
const bookColumn = ["name", "isbn", "authors", "numberOfPages"];
const characterColumn = ["name", "gender", "culture", "born"];

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.scss']
})
export class HouseItemComponent implements OnInit {
  @Input() typeResource: any;
  displayColumn: Array<string>;
  dataSource: any;

  constructor(
    private resourceService: ResourceService
  ) {
  }

  ngOnInit(): void {
    this.displayColumns(); // define which columns will display
    this.loadListResouce();
  }

  // define which columns will display
  displayColumns() {
    if (this.typeResource === "houses") {
      this.displayColumn = houseColumn;
    } else if (this.typeResource === "books") {
      this.displayColumn = bookColumn;
    } else if(this.typeResource === 'characters') {
      this.displayColumn = characterColumn;
    }
  }

  loadListResouce() {
    this.resourceService.loadListResource(this.typeResource)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
