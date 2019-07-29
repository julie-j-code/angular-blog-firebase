import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from './services/post.service';
import { Post } from './models/post.model';
import * as firebase from 'firebase'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
  constructor() {
      const firebaseConfig = {
      apiKey: "AIzaSyADXvv1BQ05dfkGI1H8Dy34xAdEC36dbjU",
      authDomain: "julie-98885.firebaseapp.com",
      databaseURL: "https://julie-98885.firebaseio.com",
      projectId: "julie-98885",
      storageBucket: "julie-98885.firebaseapp.com",
      messagingSenderId: "148901502738",
      appId: "1:148901502738:web:ed9bdd7696ff5521"
    };
	  firebase.initializeApp(firebaseConfig);

  }
  
    ngOnInit() {
  }
  
}
