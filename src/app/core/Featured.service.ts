import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/datasource/Api.service";
import { Featured } from "../Types";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class FeaturedService {

    constructor(private apiService: ApiService) {
        
    }

    getFeaturedResturants():Observable<Featured[]> {
        return this.apiService.getFeaturedResturants()
        .pipe(map(featuredResturants => featuredResturants.map(featured => ({
            ...featured,
            image: environment.baseUrl + featured.image
        }))) )
    }
}