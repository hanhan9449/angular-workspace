import { Component, OnInit } from '@angular/core';
import {PostService} from "@service";
import {AboutMeInterface} from "@shared";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title = "编辑我的"
  // post?: AboutMeInterface
  post?: any

  constructor(
    private postService: PostService<AboutMeInterface>,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.postService.getOneById$('1').subscribe(it => this.post = it)
  }

  async handleSubmit() {
    if (this.post) {
      await this.postService.updatePostById('1', this.post)
      this._snackBar.open('修改成功',undefined,{
        duration: 3000
      })
      this.router.navigate(['..'], {relativeTo: this.route})
    }
  }

  handleCancel(): void {
    this.router.navigate(['..'], {relativeTo: this.route})
  }

}
