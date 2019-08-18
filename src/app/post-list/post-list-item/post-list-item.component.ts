import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post.model';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreationDate: Date;
  @Input() postLoveIts: number;
  @Input() postToDelete: Post;
  @Input() post: Post;
  @Input() postIndex: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onLovePost() {
    this.postsService.lovePost(this.postIndex);
  }

  onDontLovePost() {
    this.postsService.dontLovePost(this.postIndex);
  }


}
