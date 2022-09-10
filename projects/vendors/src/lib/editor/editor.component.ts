import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostInterface } from 'projects/blog/src/app/post/post.interface';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';

@Component({
  selector: 'lib-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() post?: Partial< PostInterface>
  @Output() postChange = new EventEmitter<Partial<PostInterface>>()
  @Output() submit = new EventEmitter()
  @Output() cancel = new EventEmitter()


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  handleInput(key: string, value: string) {
    this.postChange.emit({...this.post, [key]: value})
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
