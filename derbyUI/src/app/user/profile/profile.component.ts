import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  followers:number=256;
  following:number  = 400;
  postCount:number = 21;
  breakpoint:number = 2;
  likeCount:number=400;
  commentCount:number=34;
  allPosts:number[] = [1,2,3,4,5,6];
  imgUrl:any="https://material.angular.io/assets/img/examples/shiba2.jpg";
  user:User = null;
  message:string = null;
  
  constructor(private service:UserLoginService) { }
  
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 3;
    this.service.getUserById(1002).subscribe(
      u=>this.user = u,
      error=>this.message = <string>error
    );
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 3;
  }
}

