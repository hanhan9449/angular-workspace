import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SharedModule, WebsiteEnum} from 'shared';
import { of, Subject } from 'rxjs';
import { navItemList } from './nav-item.list.config';
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, SharedModule, RouterModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {read: ElementRef, static: false}) menuEl?: ElementRef<HTMLButtonElement>

  title = WebsiteEnum.WEBSITE_TITLE
  subtitle = WebsiteEnum.WEBSITE_SUBTITLE
  hideSubtitle = true
  navItemList$ = of(navItemList)
  showNavList = false


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:click', ['$event.target'])
  handleDocumentClick(target: HTMLElement) {
    if ( this.menuEl?.nativeElement.contains(target) ) {
      return;
    }
    this.showNavList = false
  }

}
