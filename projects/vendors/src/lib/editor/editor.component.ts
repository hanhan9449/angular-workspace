import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostInterface } from 'projects/blog/src/app/post/post.interface';

@Component({
  selector: 'lib-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() post?: Partial< PostInterface>
  @Output() postChange = new EventEmitter<Partial<PostInterface>>()
  @Output() submit = new EventEmitter()
  @Output() cancel = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  handleInput(key: string, value: string) {
    this.postChange.emit({...this.post, [key]: value})
  }

}
