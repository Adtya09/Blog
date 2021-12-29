import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  blogs: Blog[] = [];
  constructor() {}

  ngOnInit() {
    this.blogs.push(new Blog('Blog 1', 'Summary 1'));
    this.blogs.push(new Blog('Blog 2', 'Summary 2'));
    this.blogs.push(new Blog('Blog 3', 'Summary 3'));
  }

  expand(blog: Blog) {
    alert('Show Complete ' + blog.title + ' .');
  }
}
