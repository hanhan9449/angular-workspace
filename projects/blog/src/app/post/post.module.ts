import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { DetailComponent } from './detail/detail.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { AuthModule } from '@angular/fire/auth';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    PostComponent,
    DetailComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    PostRoutingModule,
    AuthModule,
    MarkdownModule.forRoot()
  ]
})
export class PostModule { }
