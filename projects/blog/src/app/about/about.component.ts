import {Component, Inject, OnInit} from '@angular/core';
import {AuthService, POST_NAMESPACE, PostService} from "@service";
import {filter, map, Observable, startWith} from "rxjs";
import {AboutMeInterface} from "@shared";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isAdmin$?: Observable<boolean>
  post$?: Observable<AboutMeInterface|undefined>

  constructor(
    private postService: PostService<AboutMeInterface>,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isAdmin$ = this.authService.isAdmin$
    this.post$ = this.postService.getOneById$('1')
  }

  handleEditClick() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
