import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() blogTitle: String;
  @Input() blogContent: String;
  @Input() blogCreationDate: Date;
  @Input() blogLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.blogLoveIts > 0) {
      return 'green';
    } else if (this.blogLoveIts < 0) {
      return 'red';
    }
  }

  increment() {
    this.blogLoveIts = this.blogLoveIts + 1;
    return this.blogLoveIts;
  }

  decrement() {
    this.blogLoveIts = this.blogLoveIts - 1;
    return this.blogLoveIts;
  }

}
