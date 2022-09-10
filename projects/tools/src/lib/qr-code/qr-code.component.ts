import {AfterContentChecked, AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QrCodeService} from "./qr-code.service";
import {BehaviorSubject, concatMap, mergeMap, Observable, of, Subject, switchMap, tap} from "rxjs";

@Component({
  selector: 'lib-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnChanges, OnInit {
  @Input() text?: string;
  text$ = new BehaviorSubject<string>('')
  src$?: Observable<string>

  constructor(public qrCodeService: QrCodeService) { }
  ngOnInit(): void {
    this.src$ = this.text$
      .pipe(
        concatMap(t => (this.qrCodeService.geneImageFromLocal(t))))
  }

  ngOnChanges(changes: SimpleChanges) {
    this.text$.next(this.text ?? '')
  }

}
