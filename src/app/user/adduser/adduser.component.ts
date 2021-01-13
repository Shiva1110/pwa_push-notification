import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwPush } from '@angular/service-worker';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  userForm: FormGroup

  constructor(private swPush: SwPush, private formBuilder: FormBuilder, private userService: UserserviceService) {
    this.userForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]]
    })
  }

  ngOnInit(): void {

  }

  addUser() {
    let user = {
      email: this.userForm.get('email').value,
      age: this.userForm.get('age').value
    }
    this.userService.createUser(user);
    console.log(user)
    this.notifyMe()    
  }

  notifyMe() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification("User Added Successfully");
    }
  
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  }

}
