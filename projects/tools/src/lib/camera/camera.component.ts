import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {catchError, filter, from, Observable, Subject, switchMap, takeUntil, tap} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'lib-camera',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponentBase implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video') video?: ElementRef<HTMLVideoElement>
  mediaStream$?: Observable<MediaStream>
  loading = true
  error = false
  photoList = [] as string[]

  destroy$ = new Subject<void>()

  constructor() { }

  ngOnInit(): void {

    this.mediaStream$ = from(navigator.mediaDevices.getUserMedia({video:{facingMode: 'environment'}, audio:false})).pipe(
      catchError((e, origin) => (this.error = true,origin)),
      tap(o => this.loading = false)
    )
    this.destroy$.pipe(
      switchMap(() => this.mediaStream$!)
    ).subscribe(next => {
      next.getTracks().forEach(track => track.stop())

    })

  }
  ngAfterViewInit() { }

  takePhoto(videoEl: HTMLVideoElement) {
    const canvasEl = document.createElement('canvas')
    const context = canvasEl.getContext('2d')
    if (!context) {
      return
    }
    canvasEl.width = videoEl.videoWidth
    canvasEl.height = videoEl.videoHeight
    context.drawImage(videoEl, 0, 0)
    const imgSrc =  canvasEl.toDataURL('image/jpeg')
    this.photoList.push(imgSrc)
  }

  clearAllPhoto() {
    this.photoList = []
  }

  clearByIndex(index: number) {
    this.photoList.splice(index,1)
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
