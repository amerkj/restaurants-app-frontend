import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/datasource/Api.service';
import { environment } from 'src/environments/environment';
import { FilterRequestModel, Resturant } from '../Types';
import { Observable } from 'rxjs';

@Injectable()
export class ResturantsService {
  constructor(private apiService: ApiService) {}

  getResturants(page: number): Observable<{ content: Resturant[] }> {
    return this.apiService.getAllResturants(page).pipe(
      map((resturantsResponse) => ({
        ...resturantsResponse,
        content: resturantsResponse.content.map((resturant) => ({
          ...resturant,
          image: environment.baseUrl + resturant.image,
          online: Math.random() > 0.5,
        })),
      }))
    );
  }

  filterResturants(page: number, filter: FilterRequestModel): Observable<{ content: Resturant[] }> {
    return this.apiService.getResturants(page, filter).pipe(
      map((resturantsResponse) => ({
        ...resturantsResponse,
        content: resturantsResponse.content.map((resturant) => ({
          ...resturant,
          image: environment.baseUrl + resturant.image,
          online: Math.random() > 0.5,
        })),
      }))
    );
  }

  getCuisines() {
    return this.apiService.getCuisines()
  }
}
