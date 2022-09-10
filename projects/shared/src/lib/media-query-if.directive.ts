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

  _mediaQuery?: {min?: string, max?: string}
  _elseTemplate?: TemplateRef<HTMLElement>
  @Input('libMediaQueryIf')
  set mediaQuery(value: {min?: string, max?: string}) {
    this._mediaQuery = value;
  }
  @Input('libMediaQueryIfElse')
  set elseTemplate(value: TemplateRef<HTMLElement>) {
    this._elseTemplate = value
  }


  getQueryResult$(): Observable<boolean> {
    if (!this._mediaQuery?.max && !this._mediaQuery?.min) {
      return of(true)
    }
    // let mql = window.matchMedia('(max-width: 600px)');
    let query = []
    if (this._mediaQuery.max) {
      query.push(`(max-width: ${this._mediaQuery.max})`)
    }
    if (this._mediaQuery.min) {
      query.push(`(min-width: ${this._mediaQuery.min})`)
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
      this.view.clear()
      if (b) {
        this.view.createEmbeddedView(this.template)
      } else {
        if (this._elseTemplate) {
          this.view.createEmbeddedView(this._elseTemplate)
        }
      }
    })
  }
  ngAfterViewChecked() {

  }

}
