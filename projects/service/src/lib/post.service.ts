import {Inject, Injectable, InjectionToken} from '@angular/core';
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService<T> {

  constructor(
    public _firestore: Firestore,
    @Inject(POST_NAMESPACE) public namespace: string
  ) {
  }

  getOneById$(postId: string): Observable<T|undefined> {
    const detail = getDoc<T>(doc(this._firestore, this.namespace, postId) as any).then(snap => snap.data())

    return from(detail)
  }



}

export const POST_NAMESPACE = new InjectionToken<string>('post.namespace')
