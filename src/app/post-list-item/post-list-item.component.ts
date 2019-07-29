import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit  {

  @Input() index: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: any;
  @Input() post: Post;

  constructor(private postService: PostService) { }
  
  ngOnInit() {}
  
  onLoveIt() {
    this.postLoveIts++;
    this.post.loveIts = this.postLoveIts;
    this.postService.savePosts();
  }

  onDontLoveIt() {
    this.postLoveIts--;
    this.post.loveIts = this.postLoveIts;
    this.postService.savePosts();
  }
  

  onDelete(post: Post) {
    this.postService.removePost(post);
  }

}
