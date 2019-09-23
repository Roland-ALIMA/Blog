import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentsService} from '../../../services/comments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentModel} from '../../../models/Comment.model';
import {PostListItemDetailComponent} from '../post-list-item-detail/post-list-item-detail.component';

@Component({
  selector: 'app-post-list-item-new-comment',
  templateUrl: './post-list-item-new-comment.component.html',
  styleUrls: ['./post-list-item-new-comment.component.scss']
})
export class PostListItemNewCommentComponent implements OnInit {

  form: FormGroup;
  comment: string;
  postId: number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PostListItemNewCommentComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private commentsService: CommentsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.comment = data.comment;
    this.postId = data.postId;
  }

  ngOnInit() {
    this.form = this.fb.group({
      comment: [this.comment, []],
    });
  }

  save() {
    const newComment = new CommentModel(this.postId, this.comment);
    // console.log(newComment);
    // this.dialogRef.close(this.form.value);
    this.commentsService.createNewComment(newComment);
    this.close();
    // this.d.getPostComments();
    // this.d.ngOnInit();
    // this.router.navigate(['/posts', 'details', this.postId]);
    // window.location.reload();
    this.router.navigate([this.router.url]);
  }

  close() {
    this.dialogRef.close();
  }

}
