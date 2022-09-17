import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CameraComponentBase} from "@tools";
import {SharedModule} from "@shared";

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [CommonModule, CameraComponentBase, SharedModule],
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  title = '相机'

  constructor() { }

  ngOnInit(): void {
  }

}
