import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList$?: Observable<any[]>
  testImageSrc$?: Observable<string>
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.postList$ = from(this.postService.getPostList())
    this.testImageSrc$ = from(this.postService.getImageUrlByUri('D49E1FC8-8E50-4C1C-9529-20C7ABAFAF5B.jpeg'))
    
  }

}
