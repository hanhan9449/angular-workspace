import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[libDebug]'
})
export class DebugDirective implements OnChanges{
  @Input('libDebug') debugArgs?:any[] | any
  @Input() logMode: 'debug' | 'warn' | 'log' | 'info' | 'error' = 'debug'


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (Array.isArray(this.debugArgs)) {
      console[this.logMode](...this.debugArgs)
    } else {
      console[this.logMode](this.debugArgs)
    }
  }
}
