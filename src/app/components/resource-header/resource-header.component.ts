import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resource-header',
  templateUrl: './resource-header.component.html',
  styleUrls: ['./resource-header.component.scss']
})
export class ResourceHeaderComponent implements OnInit {
  @Input() titleResourcePage;
  faSearch= faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
