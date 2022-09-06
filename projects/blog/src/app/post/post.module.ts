import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { DetailComponent } from './detail/detail.component';
import { VendorsModule } from 'projects/vendors/src/public-api';



@NgModule({
  declarations: [
    PostComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    PostRoutingModule,
  ]
})
export class PostModule { }
