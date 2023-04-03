import { Component, OnInit } from '@angular/core';
import { Cuisine, Resturant } from 'src/app/Types';
import { AuthService } from 'src/app/core/Auth.service';
import { ResturantsService } from 'src/app/core/Resturants.service';

@Component({
  selector: 'app-explore-resturants',
  templateUrl: './explore-resturants.component.html',
  styleUrls: ['./explore-resturants.component.scss'],
})
export class ExploreResturantsComponent implements OnInit {
  private _isLogedIn = false;
  public get isLogedIn() {
    return this._isLogedIn;
  }
  public set isLogedIn(value) {
    this._isLogedIn = value;
  }

  private _resturants: Resturant[] = [];
  public get resturants() {
    return this._resturants;
  }
  public set resturants(value) {
    this._resturants = value;
  }

  private _page = 0;
  public get page() {
    return this._page;
  }
  public set page(value) {
    this._page = value;
  }

  searchText = '';
  searchAddress = '';
  searchCuisine:number| null = null;
  cuisines: Cuisine[] = [];

  cuisineChanged(cuisine: Cuisine | null) {
    this.searchCuisine = cuisine ? cuisine.id : null;
    this.search();
  }

  search() {
    this.resturantsService
      .filterResturants(this.page, {
        name: this.searchText,
        location: this.searchAddress,
        cuisineTypeId: this.searchCuisine,
      })
      .subscribe((resturantsResponse) => {
        console.log(resturantsResponse);
        this.resturants = resturantsResponse.content;
      });
  }

  getCuisines() {
    this.resturantsService.getCuisines().subscribe((cuisines) => {
      this.cuisines = cuisines;
    });
  }
  
  getResturants() {
    this.resturantsService.getResturants(this.page).subscribe((resturantsResponse) => {
      this.resturants = resturantsResponse.content;
    });
  }

  constructor(private resturantsService: ResturantsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getResturants()
    this.authService.isLogedIn.subscribe(isLogedIn => {
      this.isLogedIn = isLogedIn
    })
    this.getCuisines();
  }
}
