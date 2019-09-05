export class CommentModel {
  postId: number;
  content: string;
  likeComment: number;
  dontLikeComment: number;
  commentAt: string;

  constructor(postId: number, content: string) {
    this.content = content;
    this.postId = postId;
    this.likeComment = 0;
    this.dontLikeComment = 0;
    this.commentAt = new Date().toLocaleString();
  }
}
