import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource/resource.service';
import { Book } from 'src/app/models/book.model';
import { House } from 'src/app/models/house.model';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent implements OnInit {
  typeDetailPage: Array<string>;
  url: string;
  data;
  
  constructor(
    private router: Router,
    private resourceService: ResourceService

  ) {
    this.url = this.router.url.substring(1, this.router.url.length);
    this.typeDetailPage = this.url.split(/\//);
    this.getType();
    this.getDetailData();
  }

  ngOnInit(): void {
  }

  getType() {
    if (this.url[0] === "houses") {
      this.data = new House();
    } else if (this.url[0] === "books") {
      this.data = new Book();
    } else if(this.url[0] === 'characters') {
      this.data = new Character();
    }
    console.log(this.url[0])
  }

  getDetailData() {
    this.resourceService.getDetailData(this.url)
        .subscribe(data => {
          this.data = data;
          console.log(this.data);
        })
  }

}
