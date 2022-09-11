import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import {EditorDataInterface} from "shared/src/lib/editor-data.interface";

@Component({
  selector: 'lib-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent<T extends EditorDataInterface> implements OnInit {
  @Input() post?: T
  @Output() postChange = new EventEmitter<T>()
  @Output() submit = new EventEmitter()
  @Output() cancel = new EventEmitter()


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  handleInput(key: 'title'|'content', value: string) {
    this.postChange.emit({...this.post, [key]: value} as T)
  }

  handleCancel(): void {
    const dialogRef = this.dialog.open(CancelDialogComponent, {
      width: '250px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.cancel.emit()
      }
    })
  }

}
