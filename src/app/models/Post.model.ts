export class Post {

  loveIts: number;
  dontLoveIts: number;
  comments: number;
  createdAt: string;

  constructor(public  title: string, public  content: string) {
    this.loveIts = 0;
    this.dontLoveIts = 0;
    this.comments = 0;
    this.createdAt = new Date().toLocaleString();
  }

}
