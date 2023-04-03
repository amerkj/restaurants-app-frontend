import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Ad,
  Cuisine,
  Featured,
  FilterRequestModel,
  Resturant,
} from 'src/app/Types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${this.baseUrl}ads`);
  }

  getFeaturedResturants(): Observable<Featured[]> {
    return this.http.get<Featured[]>(`${this.baseUrl}featured`);
  }
  getResturants(
    page: number,
    filterRequest: FilterRequestModel = {
      name: '',
      location: '',
      cuisineTypeId: null,
    }
  ): Observable<{ content: Resturant[] }> {
    return this.http.post<{ content: Resturant[] }>(
      `${this.baseUrl}restaurants/filter?page=${page}`,
      {
        name: filterRequest.name,
        location: filterRequest.location,
        cuisineTypeId: filterRequest.cuisineTypeId,
      }
    );
  }

  getAllResturants(page: number): Observable<{ content: Resturant[] }> {
    return this.http.get<{ content: Resturant[] }>(`${this.baseUrl}restaurants/cuisine-type?page=${page}`);
  }

  getCuisines(): Observable<Cuisine[]> {
    return this.http.get<Cuisine[]>(`${this.baseUrl}restaurants/cuisine`);
  }

  login(email:string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, {
      username: email,
      password,
    });
  }
}
