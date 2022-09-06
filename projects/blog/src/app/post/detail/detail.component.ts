import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  postId$?: Observable<string>

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.postId$ = this.route.params.pipe(map(it => it['id']))
  }

}
