import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import {POST_NAMESPACE, SharedModule} from "@shared";
import {EditorModule, VendorsModule} from "@vendors";
import {MarkdownModule} from "ngx-markdown";
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AboutComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    VendorsModule,
    MarkdownModule.forChild(),
    EditorModule
  ],
  providers: [
    {provide:POST_NAMESPACE, useValue: 'about-me'}
  ]
})
export class AboutModule { }
