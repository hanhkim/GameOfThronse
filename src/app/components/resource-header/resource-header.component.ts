import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resource-header',
  templateUrl: './resource-header.component.html',
  styleUrls: ['./resource-header.component.scss']
})
export class ResourceHeaderComponent implements OnInit {
  titleResourcePage : string = 'HOUSES';
  faSearch= faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
