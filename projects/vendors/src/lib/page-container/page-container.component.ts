import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'lib-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  imports: [HeaderComponent, FooterComponent],
  standalone: true
})
export class PageContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
