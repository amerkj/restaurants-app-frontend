import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragScrollComponent } from './components/drag-scroll/drag-scroll.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LargeHeroComponent } from './components/large-hero/large-hero.component';
import { AdsComponent } from './components/ads/ads.component';
import { FeaturedResturantsComponent } from './components/featured-resturants/featured-resturants.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { ExploreResturantsComponent } from './components/explore-resturants/explore-resturants.component';
import { FooterComponent } from './components/footer/footer.component';
import { RadioPickerComponent } from './shared/radio-picker/radio-picker.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdsService } from './core/Ads.service';
import { FeaturedService } from './core/Featured.service';
import { AuthInterceptor } from './core/AuthInterceptor.service';
import { ResturantsService } from './core/Resturants.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './core/Auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DragScrollComponent,
    NavbarComponent,
    LogoComponent,
    LargeHeroComponent,
    AdsComponent,
    FeaturedResturantsComponent,
    SearchBarComponent,
    ExploreResturantsComponent,
    FooterComponent,
    RadioPickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgbModule],
  providers: [
    AdsService,
    ResturantsService,
    FeaturedService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
