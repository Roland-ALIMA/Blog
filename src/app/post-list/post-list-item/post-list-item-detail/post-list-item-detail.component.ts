import {Component, Inject, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../../models/Post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../../services/posts.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {PostListItemNewCommentComponent} from '../post-list-item-new-comment/post-list-item-new-comment.component';
import {CommentModel} from '../../../models/Comment.model';
import {CommentsService} from '../../../services/comments.service';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-post-list-item-detail',
  templateUrl: './post-list-item-detail.component.html',
  styleUrls: ['./post-list-item-detail.component.scss']
})
export class PostListItemDetailComponent implements OnInit, OnDestroy {

  post: Post;
  postIndex: number;
  logoPath = 'assets/images/default-logo.png';
  comments: CommentModel[] = [];
  commentSubscription: Subscription;
  postComments: CommentModel[] = [];

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router,
              private dialog: MatDialog,
              private commentsService: CommentsService) { }

  ngOnInit() {
    this.post = new Post('', '');
    const id = this.route.snapshot.params['id'];
    this.postIndex = id;
    this.postsService.getPostById(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
    this.getPostComments();
    console.log(this.postComments);
  }

  getPostComments() {
    this.commentSubscription = this.commentsService.commentSubject.subscribe(
      (comments: CommentModel[]) => {
        this.comments = comments;
      }
    );
    this.commentsService.getComments();
    this.commentsService.emitComments();
    for (const comment of this.comments) {
      if (comment.postId === this.postIndex) {
        this.postComments.push(comment);
      }
    }
  }

  onBack() {
    this.router.navigate(['/books']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
    this.onBack();
  }

  onLovePost() {
    this.postsService.lovePost(this.postIndex);
  }

  onDontLovePost() {
    this.postsService.dontLovePost(this.postIndex);
  }

  onNoClick() {
    // this.dialogRef.close();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '10%',
      left: '25%'
    };
    dialogConfig.data = {
      postId: this.postIndex,
      title: 'Angular For Beginners'
    };
    dialogConfig.height = '45%';
    dialogConfig.width = '50%';

    this.dialog.open(PostListItemNewCommentComponent, dialogConfig);
  }

  ngOnDestroy() {
    this.commentSubscription.unsubscribe();
  }

}
