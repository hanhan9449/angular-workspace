import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PostInterface } from '../post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  title = '新建文章'
  post: Partial<PostInterface> = {}

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  savePost(): void {
    this.postService.saveNewPost(this.post as any)
    console.debug(this.post)
    this._snackBar.open('保存发布成功', undefined, {
      duration: 3000
    })
    this.router.navigate(['..'], {relativeTo: this.route})
  }

  cancel():void {
    this.router.navigate(['..'], {relativeTo: this.route})
  }

}
