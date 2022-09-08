import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {QrCodeService} from "./qr-code.service";

@Component({
  selector: 'lib-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit, AfterContentChecked {
  @Input() text?: string;

  constructor(public qrCodeService: QrCodeService) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
  }
  geneImage() {
    return this.qrCodeService.geneImageFromLocal(this.text)
  }

}
