export class Post {

  loveIts: number;
  createdAt: string;

  constructor(public  title: string, public  content: string) {
    this.loveIts = 0;
    this.createdAt = new Date().toLocaleString();
  }

}
