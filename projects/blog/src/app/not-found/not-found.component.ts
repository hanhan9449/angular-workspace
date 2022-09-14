import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "shared";
import {VendorsModule} from "vendors";
import {Router} from "@angular/router";
import {TimerComponent} from "vendors/src/lib/timer/timer.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, SharedModule, TimerComponent, MatButtonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  title = '啊哦，这里什么都没有～(404)'
  time = 10000

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigatorToHome(): void {
    this.router.navigate([''])

  }

}
