import { Component } from '@angular/core';
import {PostModel} from "./model/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';
  posts: PostModel[];

  constructor() {
    this.posts = [new PostModel('Prova','http://www.reddit.com/',200), new PostModel('ciao','http://ciao.com',10)];
  }

  addPost(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Sto aggiungendo un post: ${title.value} con link: ${link.value}`);
    this.posts.push(new PostModel(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
