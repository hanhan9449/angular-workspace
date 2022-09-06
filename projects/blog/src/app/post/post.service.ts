import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { from, of } from 'rxjs';
import { PostInterface } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public firestore: Firestore, public storage: Storage) { }

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

    return from(detail)
  }
}
