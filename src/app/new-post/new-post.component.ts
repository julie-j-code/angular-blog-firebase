import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: 0,
      created_at: ''
    });
  }
  
  onSubmitForm(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = this.postForm.get('loveIts').value;
    const created_at = Date.now();
    const newPost = new Post(title, content, loveIts, created_at);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
