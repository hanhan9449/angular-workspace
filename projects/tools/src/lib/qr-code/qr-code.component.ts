import {AfterContentChecked, AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QrCodeService} from "./qr-code.service";
import {Observable} from "rxjs";

@Component({
  selector: 'lib-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit, AfterContentChecked, AfterViewChecked, OnChanges {
  @Input() text?: string;
  src$?: Observable<string>

  constructor(public qrCodeService: QrCodeService) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!this.text) {
      return;
    }
    this.src$ =  this.qrCodeService.geneImageFromLocal(this.text)

  }

  ngAfterViewChecked() {
  }

}
