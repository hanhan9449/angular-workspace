import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { DetailComponent } from './detail/detail.component';
import { EditorModule, VendorsModule } from 'projects/vendors/src/public-api';
import { AuthModule } from '@angular/fire/auth';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { MarkdownModule } from 'ngx-markdown';
import {SharedModule} from "../../../../shared/src/lib/shared.module";



@NgModule({
  declarations: [
    PostComponent,
    DetailComponent,
    EditComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    VendorsModule,
    PostRoutingModule,
    AuthModule,
    MarkdownModule.forRoot(),
    EditorModule,
    SharedModule
  ]
})
export class PostModule { }
