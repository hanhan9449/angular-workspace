import {Component, Inject, OnInit} from '@angular/core';
import {AuthService, POST_NAMESPACE, PostService} from "service";
import {map, Observable} from "rxjs";
import {AboutMeInterface} from "shared/src/lib/about-me.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [PostService, {provide: POST_NAMESPACE, useValue: 'about-me'}]
})
export class AboutComponent implements OnInit {
  title = '关于我和更多'
  isAdmin$?: Observable<boolean>
  content$?: Observable<string>

  constructor(
    private postService: PostService<AboutMeInterface>,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isAdmin$ = this.authService.isAdmin$
    this.content$ = this.postService.getOneById$('1').pipe(map(it => it?.content ?? ''))
  }

}
