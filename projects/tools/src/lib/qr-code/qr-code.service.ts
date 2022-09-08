import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import * as qrcode from 'qrcode'

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor() { }

  geneImageFromLocal(text: string): Observable<string> {
    const res = qrcode.toDataURL(text, {width: 300, margin: 0, scale: 1})
    return from(res)
  }
}
