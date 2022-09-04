import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'projects/shared/src/constants';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = CONSTANTS.WEBSITE_TITLE
  subtitle = CONSTANTS.WEBSITE_SUBTITLE
  hideSubtitle = true


  constructor() { }

  ngOnInit(): void {
  }

}
