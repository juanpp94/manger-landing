import { Component, Input } from '@angular/core';
import { BannersStyle, Colors, ObjBanner } from '../../types/color';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() information: string = "Simplify how your team works today."
  @Input() bannerStyle: Colors = "bright-red";
  bannersStyleList: ObjBanner = BannersStyle;

  get styles() {
    if(this.bannersStyleList[this.bannerStyle]) {
      return this.bannersStyleList[this.bannerStyle];
    } else {
      return {};
    }
  }
}
