import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { BulletComponent } from './components/bullets/bullet.component';
import { FeatureComponent } from './components/feature/feature.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CtaButtonComponent,
    BulletComponent,
    FeatureComponent,
    TestimonialCardComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CtaButtonComponent,
    BulletComponent,
    TestimonialCardComponent,
    BannerComponent,
    FooterComponent,
    FeatureComponent
  ]
})
export class SharedModule { }
