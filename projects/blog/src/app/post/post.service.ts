import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { firestore, storage } from 'projects/shared/src/firebase';
import { PostInterface } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  async getPostList() {
    const list = await getDocs(collection(firestore, 'post'))
    const res = [] as PostInterface[]
    list.forEach(doc => {
      res.push({id: doc.id, ...doc.data()} as unknown as PostInterface)
    })
    return res
  }

  async getImageUrlByUri(uri: string) {
    return getDownloadURL(ref(storage, uri))
  }
}
