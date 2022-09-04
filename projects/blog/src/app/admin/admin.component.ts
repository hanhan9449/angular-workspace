import { Component, OnInit } from '@angular/core';
import { signIn } from 'projects/shared/src/firebase/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signIn() {
    signIn()
  }

}
