import { Component, ContentChild, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  @ContentChild('title') titleEl?: HTMLInputElement
  @ContentChild('content') contentEl?: HTMLTextAreaElement

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    const title = this.titleEl?.value!
    const content = this.contentEl?.value!
    this.postService.saveNewPost({title: 'test', content: 'test content'})
  }

}
