import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";
import {map, Observable, switchMap, take} from "rxjs";
import {PostInterface} from "../post.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title = '编辑文章'
  postId$?: Observable<string>
  post?: Partial<PostInterface>

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.postId$ = this.route.params.pipe(map(it => it['id']))
    if (this.postId$) {
       this.postId$.pipe(switchMap(it => this.postService.getPostDetail$(it))).subscribe(post => {
         this.post = post
       })
    }
  }

  handleSubmit() {
    this.postId$?.pipe(take(1)).subscribe(async postId => {
      if (this.post) {
        await this.postService.updatePost(postId, this.post)
        this._snackBar.open('修改发布成功',undefined,{
          duration: 3000
        })
        this.router.navigate(['../..'], {relativeTo: this.route})
      }
    })
  }
  handleCancel() {
    this.router.navigate(['..'], {relativeTo: this.route})
  }

}
