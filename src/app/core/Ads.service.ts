import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Ad } from 'src/app/Types';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/datasource/Api.service';

@Injectable()
export class AdsService {
  constructor(private apiService: ApiService) {}

  getAds() {
    return this.apiService.getAds().pipe(
      map((ads: Ad[]) =>
        ads.map((ad) => ({
          ...ad,
          image: environment.baseUrl + ad.image,
        }))
      )
    );
  }
}
