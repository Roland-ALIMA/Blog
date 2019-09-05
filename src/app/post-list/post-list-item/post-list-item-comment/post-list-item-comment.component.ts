import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-comment',
  templateUrl: './post-list-item-comment.component.html',
  styleUrls: ['./post-list-item-comment.component.scss']
})
export class PostListItemCommentComponent implements OnInit {

  @Input() commentContent: string;

  constructor() { }

  ngOnInit() {
  }

}
