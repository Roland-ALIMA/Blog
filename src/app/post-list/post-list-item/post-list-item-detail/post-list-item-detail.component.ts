import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../../services/posts.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-post-list-item-detail',
  templateUrl: './post-list-item-detail.component.html',
  styleUrls: ['./post-list-item-detail.component.scss']
})
export class PostListItemDetailComponent implements OnInit {

  post: Post;
  postIndex: number;
  logoPath = 'assets/images/default-logo.png';

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.post = new Post('', '');
    const id = this.route.snapshot.params['id'];
    this.postIndex = id;
    this.postsService.getPostById(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
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

}
