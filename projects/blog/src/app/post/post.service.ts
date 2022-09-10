import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {addDoc, deleteDoc, doc, Firestore, getDoc, updateDoc} from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import {from, Observable, of, take} from 'rxjs';
import { PostInterface } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public firestore: Firestore, public storage: Storage, public afAuth: AngularFireAuth) { }

  async getPostList() {
    const list = await getDocs(collection(this.firestore, 'post'))
    const res = [] as PostInterface[]
    list.forEach(doc => {
      res.push({id: doc.id, ...doc.data()} as unknown as PostInterface)
    })
    return res
  }

  async getImageUrlByUri(uri: string) {
    return getDownloadURL(ref(this.storage, uri))
  }

  getPostDetail$(postId: string) {
    const detail = getDoc(doc(this.firestore, 'post', postId)).then(snap => snap.data())

    return from(detail) as Observable<PostInterface>
  }

  saveNewPost(post: Pick<PostInterface, 'content' | 'title'>) {
    const postDbRef = collection(this.firestore, 'post');
    this.afAuth.authState.pipe(take(1)).subscribe(info => {
      console.debug('saveNewPost', info, post)
      if (!info) {
        return
      }
      (post as PostInterface).author = info.email ?? '';
      const now = Date.now();
      (post as PostInterface).createAt = now;
      (post as PostInterface).modifiedAt = now;
      addDoc(postDbRef, post)

    })
  }
  async deletePost(postId: string) {
    await deleteDoc(doc(this.firestore, 'post', postId))
  }

  async updatePost(postId: string, post: Partial<PostInterface>) {
    if (!postId) {
      return
    }
    const currentPost = doc(this.firestore, 'post', postId)
    const next = {...post, modifiedAt: Date.now()}
    await updateDoc(currentPost, next)
  }
}
