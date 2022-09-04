import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
