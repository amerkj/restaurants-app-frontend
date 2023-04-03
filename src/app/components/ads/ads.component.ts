import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/Types';
import { AdsService } from 'src/app/core/Ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  private _ads: Ad[] = [];
  public get ads() {
    return this._ads;
  }
  public set ads(value) {
    this._ads = value;
  }

  constructor(private adsService: AdsService) {
  }


  ngOnInit(): void {
    this.adsService.getAds().subscribe(ads => {
      this.ads = ads
    })
  }

}
