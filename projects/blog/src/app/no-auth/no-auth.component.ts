import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@shared";
import {VendorsModule} from "@vendors";

@Component({
  selector: 'app-no-auth',
  standalone: true,
  imports: [CommonModule, SharedModule, VendorsModule],
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.scss']
})
export class NoAuthComponent implements OnInit {
  title = '你来到了一个不属于你的领域(401)'

  time = 10000

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigatorToHome(): void {
    this.router.navigate(['/'])
  }

}
