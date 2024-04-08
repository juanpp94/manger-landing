import { Component, Input } from '@angular/core';
import { BulletsStyle, ObjBullet } from '../../types/color';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent {

  @Input() bulletStyle: string = "bright-red";
  @Input() bulletNumber: string = "01";
  bulletsStyleList: ObjBullet = BulletsStyle;


  get styles() {
    if(this.bulletsStyleList[this.bulletStyle]) {
      return this.bulletsStyleList[this.bulletStyle]
    } else{
      return {};
    }
  }
}
