import { Component, Input } from '@angular/core';
import { ButtonsStyle, ObjButton } from '../../types/color';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent {
  @Input() description: string = "Get Started";
  @Input() buttonStyle: string = "call-to-action-bright-red";
  buttonsStyleList: ObjButton = ButtonsStyle;


  /**
   * Method that get the styles of the call to action button
   */
  get styles() {
    if(this.buttonsStyleList[this.buttonStyle]) {
      return this.buttonsStyleList[this.buttonStyle];
    } else {
      return {};
    }
  }

 
}
