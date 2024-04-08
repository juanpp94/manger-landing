import { Component, Input } from '@angular/core';
import { Testimonial } from '../../types/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {
  @Input() testimonial: Testimonial = {img: "", name: "", testimony: ""};
  
  ngOnInit() {
    console.log(this.testimonial);
  }
  

}
