import { Component, OnInit } from '@angular/core';
import {PostService} from "service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = '关于我和更多'

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

}
