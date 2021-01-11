import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.scss']
})
export class DisplayuserComponent implements OnInit {

  users=[]

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    this.displayPosts()
  }

  displayPosts(){
    this.userService.getPosts().subscribe((res:Array<any>)=>{
      let i = 0;
      res.map((item)=>{
        if(i<5){
          console.log(item);
          i++
        }
      })
    })
  }
}
