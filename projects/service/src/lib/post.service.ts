import {Inject, Injectable, InjectionToken} from '@angular/core';
import {doc, Firestore, getDoc, updateDoc} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {DocumentReference} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'any'
})
export class PostService<T> {

  constructor(
    public _firestore: Firestore,
    @Inject(POST_NAMESPACE) public namespace: string
  ) {
    if (!namespace) {
      console.error('没有POST_NAMESPACE provide')
    }
  }

  getOneById$(postId: string): Observable<T|undefined> {
    const detail = getDoc<T>(doc(this._firestore, this.namespace, postId) as any).then(snap => snap.data())

    return from(detail)
  }

  async updatePostById(postId: string, post: Partial<T>) {
    if (!postId) {
      console.error('updatePostById', '没有传postId进来')
      return
    }
    console.debug('updatePostById', post)
    const currentPost = doc(this._firestore, this.namespace, postId)
    await updateDoc<any>(currentPost, post);
  }


}

export const POST_NAMESPACE = new InjectionToken<string>('post.namespace')
