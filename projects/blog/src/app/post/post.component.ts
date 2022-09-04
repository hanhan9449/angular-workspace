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
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.postList$ = from(this.postService.getPostList())
    
  }

}
