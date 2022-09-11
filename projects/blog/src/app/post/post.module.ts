import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { DetailComponent } from './detail/detail.component';
import { EditorModule, VendorsModule } from 'vendors';
import { AuthModule } from '@angular/fire/auth';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { MarkdownModule } from 'ngx-markdown';
import {SharedModule} from "shared";
import { DeleteDialogComponent } from './detail/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    PostComponent,
    DetailComponent,
    EditComponent,
    NewComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    VendorsModule,
    PostRoutingModule,
    AuthModule,
    MarkdownModule.forChild(),
    EditorModule,
    SharedModule
  ]
})
export class PostModule { }
