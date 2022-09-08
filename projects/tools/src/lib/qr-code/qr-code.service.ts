import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor() { }

  geneImageFromLocal(text?: string) {
    if (!text) {
      text = ''
    }
    return text
  }
}
