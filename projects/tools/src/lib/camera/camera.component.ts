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
  photoList = [] as string[]

  destroy$ = new Subject<void>()

  constructor() { }

  ngOnInit(): void {
    this.mediaStream$ = new Observable<MediaStream>(subscriber => {
      const media$ = navigator.mediaDevices.getUserMedia({video: true, audio: false})
      media$.then(
        m => subscriber.next(m)
      )
      return async () => {
        const media = await media$
        media.getTracks().forEach(t => t.stop())
      }
    }).pipe(takeUntil(this.destroy$))
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
