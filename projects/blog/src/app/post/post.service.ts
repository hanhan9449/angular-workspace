import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from 'projects/shared/src/firebase';
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
}
