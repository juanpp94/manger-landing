import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/shared/types/testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @Input() testimonials: Testimonial[] = [];
}
