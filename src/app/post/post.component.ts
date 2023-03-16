import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {PostModel} from "../model/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  @Input() post: PostModel;
  @HostBinding('attr.class') cssClass='row';

  constructor(){
    this.post = new PostModel('','');
  }

  voteUp(): boolean{
    this.post.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.post.voteDown();
    return false;
  }

  ngOnInit(): void {
  }



}
