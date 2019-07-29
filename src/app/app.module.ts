import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostListItemComponent } from './post-list-item/post-list-item.component'
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from './services/post.service'


const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: '', component: PostListComponent},
  {path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
	HttpClientModule
	
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
