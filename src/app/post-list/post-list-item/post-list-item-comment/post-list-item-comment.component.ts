import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../../models/Comment.model';

@Component({
  selector: 'app-post-list-item-comment',
  templateUrl: './post-list-item-comment.component.html',
  styleUrls: ['./post-list-item-comment.component.scss']
})
export class PostListItemCommentComponent implements OnInit {

  @Input() commentContent: string;
  @Input() commentLikeComment: string;
  @Input() commentDontLikeComment: string;
  @Input() commentCommentAt: string;
  @Input() comment: CommentModel;
  @Input() commentIndex: number;
  logoPath = 'assets/images/default-logo.png';

  constructor() { }

  ngOnInit() {
  }

  onDontLoveComment() {

  }

  onLoveComment() {

  }

  onDeleteComment(comment: CommentModel) {

  }

}
