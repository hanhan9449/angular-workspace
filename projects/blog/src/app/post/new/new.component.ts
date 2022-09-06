import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  title = new FormControl('')
  content = new FormControl('')

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    this.postService.saveNewPost({title: this.title.value!, content: this.content.value!})
  }

}
