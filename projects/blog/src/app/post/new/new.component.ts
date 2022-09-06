import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostInterface } from '../post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  post: Partial<PostInterface> = {}

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    this.postService.saveNewPost(this.post as any)
    console.debug(this.post)
  }

  cancel():void {}

}
