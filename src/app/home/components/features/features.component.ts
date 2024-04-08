import { Component, Input } from '@angular/core';
import { Feature } from 'src/app/shared/types/types';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

 @Input() features: Feature[] = [];
 
}
