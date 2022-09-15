import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    StarRatingComponent
  ]
})
export class FeatureModule { }
