import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import {SharedModule} from "shared";
import {VendorsModule} from "vendors";
import {MarkdownModule} from "ngx-markdown";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    VendorsModule,
    MarkdownModule.forChild()
  ]
})
export class AboutModule { }
