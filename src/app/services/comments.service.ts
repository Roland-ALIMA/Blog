import {Injectable, Input} from '@angular/core';
import * as firebase from 'firebase';
import {Subject} from 'rxjs/Subject';
import {CommentModel} from '../models/Comment.model';
import {forEachComment} from 'tslint';
import {Post} from '../models/Post.model';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  @Input() post: Post;
  commentsFromDB: CommentModel[] = [];
  postsComments: CommentModel[] = [];
  commentSubject = new Subject<CommentModel[]>();

  constructor(private route: ActivatedRoute) {}

  emitComments() {
    this.commentSubject.next(this.commentsFromDB);
    // const id = this.route.snapshot.params['id'];
    // this.getPostComments(this.commentsFromDB, id);
  }

  getComments() {
    firebase.database().ref('/comments')
      .on('value', (data) => {
        this.commentsFromDB = data.val() ? data.val() : [];
        this.emitComments();
      });
  }

  getPostComments(commentsFromDB: CommentModel[], postId: number) {
    commentsFromDB.forEach(function(comment) {
      if (comment.postId === postId) {
        this.postsComments.push(comment);
        this.commentSubject.next(this.postsComments);
      }
    });
  }

  saveComments() {
    firebase.database().ref('/comments').set(this.commentsFromDB);
  }

  createNewComment(newComment: CommentModel) {
    this.commentsFromDB.push(newComment);
    this.saveComments();
    this.emitComments();
  }

}
