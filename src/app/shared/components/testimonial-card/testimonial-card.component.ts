import { Component, Input } from '@angular/core';
import { Testimonial } from '../../types/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {
  @Input() testimonial: Testimonial = {img: "../../../../assets/avatar-ali.png", name: "Ali Bravo", 
  testimony: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."};
  
  

}
