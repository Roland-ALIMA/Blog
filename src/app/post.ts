export class Post {
  private _title: String;
  private _content: String;
  private _loveIts: number;
  private created_at: Date;

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get content(): String {
    return this._content;
  }

  set content(value: String) {
    this._content = value;
  }

  get loveIts(): number {
    return this._loveIts;
  }

  set loveIts(value: number) {
    this._loveIts = value;
  }

  constructor() {
    this.created_at = new Date();
  }
}
