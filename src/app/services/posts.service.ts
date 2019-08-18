import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  constructor() { }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  lovePost(index: number) {
    ++this.posts[index]['loveIts'];
    this.savePosts();
    this.emitPosts();
  }

  dontLovePost(index: number) {
    --this.posts[index]['loveIts'];
    this.savePosts();
    this.emitPosts();
  }

}
