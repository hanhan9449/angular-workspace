import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { PostService } from '../post.service';
import {PostInterface} from "../post.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title = '文章详情'

  postId$?: Observable<string>
  post$?: Observable<PostInterface>

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postId$ = this.route.params.pipe(map(it => it['id']))
    if (this.postId$) {

    this.post$ = this.postId$.pipe(switchMap(id => this.postService.getPostDetail$(id)))
    }
  }

}
