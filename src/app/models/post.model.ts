export class Post {

  title: string;
  content: string;
  loveIts: any;
  created_at: any;

  constructor( title: string,  content: string,  loveIts?: any, created_at?: any) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}