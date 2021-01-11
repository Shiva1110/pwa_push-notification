import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserserviceService) {
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
  }

}
