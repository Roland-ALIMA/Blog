import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './post-list/new-post/new-post.component';
import {PostsService} from './services/posts.service';
import {ReactiveFormsModule} from '@angular/forms';
import { PostListItemDetailComponent } from './post-list/post-list-item/post-list-item-detail/post-list-item-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'posts/details/:id', component: PostListItemDetailComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent,
    PostListItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
