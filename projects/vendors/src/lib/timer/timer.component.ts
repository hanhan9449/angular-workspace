import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'lib-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  standalone: true,
  imports: []
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() time?: number
  @Output() timeChange = new EventEmitter<number>()
  @Output() isTime = new EventEmitter<void>()
  modifiedAt?: number
  timerId?: number

  constructor() { }

  ngOnDestroy(): void {
        clearTimeout(this.timerId)
    }

  dec(): void {
    const now = Date.now()
    const diff = now - this.modifiedAt!
    this.modifiedAt = now
    const next = Math.max(this.time! - diff, 0)
    this.timeChange.emit(next)
  }

  ngOnInit(): void {
    this.modifiedAt = Date.now()
    if (typeof this.time !== "number") {
      console.error('必须传入一个number类型的time')
    }
    const handler = () => {
      this.dec()
      this.timerId = setTimeout(handler, 1000) as unknown as number
      if (this.time === 0) {
        this.isTime.emit()
        clearTimeout(this.timerId)
      }
    }
    handler()
  }

}
