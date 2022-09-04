import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'projects/shared/src/constants';
import { of, Subject } from 'rxjs';
import { navItemList } from './nav-item.list.config';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = CONSTANTS.WEBSITE_TITLE
  subtitle = CONSTANTS.WEBSITE_SUBTITLE
  hideSubtitle = true
  navItemList$ = of(navItemList)


  constructor() { }

  ngOnInit(): void {
  }

}
