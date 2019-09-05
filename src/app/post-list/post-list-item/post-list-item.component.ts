import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post.model';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';

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
  @Input() postDontLoveIts: number;
  @Input() postComments: number;
  @Input() post: Post;
  @Input() postIndex: number;
  logoPath = 'assets/images/default-logo.png';

  constructor(private postsService: PostsService,
              private router: Router) { }

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

  onSeeDetails(post: Post) {
    this.router.navigate(['/posts', 'details', this.postIndex]);
  }

}
