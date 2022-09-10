import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, Observable, switchMap, take} from 'rxjs';
import { PostService } from '../post.service';
import {PostInterface} from "../post.interface";
import {AuthService} from "../../../../../shared/src/lib/auth/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title = '文章详情'

  postId$?: Observable<string>
  post$?: Observable<PostInterface>
  isAdmin$?: Observable<boolean>

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private authService: AuthService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAdmin$ = this.authService.isAdmin$
    this.postId$ = this.route.params.pipe(map(it => it['id']))
    if (this.postId$) {

    this.post$ = this.postId$.pipe(switchMap(id => this.postService.getPostDetail$(id)))
    }
  }
  deleteButtonClick(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'delete') {
        this.postId$?.pipe(take(1)).subscribe(id => {
          this.postService.deletePost(id).then(it => {
            this._snackBar.open('删除成功', undefined, {
              duration: 3000
            })
            this.router.navigate(['../..'], {relativeTo: this.route})
          })
        })
      }
    })

  }
  editButtonClick(): void {
    this.postId$?.pipe(take(1)).subscribe(postId => {
      this.router.navigate(['post/edit', postId])
    })
  }

}
