import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BlogListComponent, BlogPostComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
