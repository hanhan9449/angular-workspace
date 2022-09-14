import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "@shared";
import {MarkdownModule} from "ngx-markdown";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MarkdownModule.forChild()
  ]
})
export class HomeModule { }
