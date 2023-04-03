import { Component, OnInit } from '@angular/core';
import { Featured } from 'src/app/Types';
import { FeaturedService } from 'src/app/core/Featured.service';

@Component({
  selector: 'app-featured-resturants',
  templateUrl: './featured-resturants.component.html',
  styleUrls: ['./featured-resturants.component.scss']
})
export class FeaturedResturantsComponent implements OnInit {

  private _featuredResturants:Featured[] = [];
  public get featuredResturants() {
    return this._featuredResturants;
  }
  public set featuredResturants(value) {
    this._featuredResturants = value;
  }

  constructor(private featuredService: FeaturedService) { }

  ngOnInit(): void {
    this.featuredService.getFeaturedResturants().subscribe(featuredResturants => {
      this.featuredResturants = featuredResturants
    })
  }

}
