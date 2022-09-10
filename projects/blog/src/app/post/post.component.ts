import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PostService } from './post.service';
import {AuthService} from "service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = '文章列表'

  postList$?: Observable<any[]>
  testImageSrc$?: Observable<string>
  isAdmin$?: Observable<boolean>
  constructor(private readonly postService: PostService,
    private readonly authService: AuthService
    ) { }

  ngOnInit(): void {
    this.postList$ = from(this.postService.getPostList())
    this.testImageSrc$ = from(this.postService.getImageUrlByUri('D49E1FC8-8E50-4C1C-9529-20C7ABAFAF5B.jpeg'))
    this.isAdmin$ = this.authService.isAdmin$

  }

}
