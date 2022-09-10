import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef, Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {distinctUntilChanged, Observable, of, throttleTime} from "rxjs";
import {getMediaQueryResult$} from "./media-query";

@Directive({
  selector: '[libMediaQueryIf]'
})
export class MediaQueryIfDirective implements AfterViewInit, AfterViewChecked {

  @Input('libMediaQueryIf') mediaQuery?: {min?: string, max?: string}

  getQueryResult$(): Observable<boolean> {
    if (!this.mediaQuery?.max && !this.mediaQuery?.min) {
      return of(true)
    }
    // let mql = window.matchMedia('(max-width: 600px)');
    let query = []
    if (this.mediaQuery.max) {
      query.push(`(min-width: ${this.mediaQuery.max})`)
    }
    if (this.mediaQuery.min) {
      query.push(`(max-width: ${this.mediaQuery.min})`)
    }
    let queryStr = query.join('and')
    return getMediaQueryResult$(queryStr)
  }
  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
  }

  ngAfterViewInit() {
    let mediaResult$ = this.getQueryResult$()
    mediaResult$.subscribe(b => {
      if (b) {
        this.view.createEmbeddedView(this.template)
      } else {
        this.view.clear()
      }
    })
  }
  ngAfterViewChecked() {

  }

}
