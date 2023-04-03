import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/datasource/Api.service';

@Injectable()
export class AuthService {
    Token = new BehaviorSubject("")
    isLogedIn = new BehaviorSubject(false)

    constructor(private apiService: ApiService) {
        let token = window.localStorage.getItem("token")
        if(token) {
            this.Token.next(token)
            this.isLogedIn.next(true)
        }
    }

    login(email:string, password:string):Observable<any> {
        return this.apiService.login(email, password)
        .pipe(map(res => {
            this.Token.next(res.token)
            this.isLogedIn.next(true)
            window.localStorage.setItem("token", res.token)
        }))
    }

    logout() {
        this.Token.next("")
        this.isLogedIn.next(false)
        window.localStorage.removeItem("token")
    }
}
