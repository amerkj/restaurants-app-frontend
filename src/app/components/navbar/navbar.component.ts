import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/Auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  email=""
  password=""
  isLogedIn = false

  login() {
    if(this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(e => window.location.reload())
    }
  }

  logout() {
    this.authService.logout()
    window.location.reload()
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLogedIn.subscribe(isLogedIn => {
      this.isLogedIn = isLogedIn
    })
  }

}
