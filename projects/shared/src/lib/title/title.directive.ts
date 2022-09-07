import {AfterViewChecked, Directive, Input, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {geneTitleUtils} from "./gene-title.utils";

@Directive({
  selector: '[libTitle]'
})
export class TitleDirective implements OnInit, AfterViewChecked{
  @Input('libTitle') title?: string | string[];

  constructor(private documentTitle: Title) {
  }

  ngOnInit() {

  }
  ngAfterViewChecked() {
    const geneTitle = geneTitleUtils(this.title)
    this.documentTitle.setTitle(geneTitle)

  }

}
