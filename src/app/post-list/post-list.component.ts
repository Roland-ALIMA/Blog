import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;
  p = 1;
  total: number;
  @Output() pageChanged: EventEmitter<number>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        this.total = posts.length;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
