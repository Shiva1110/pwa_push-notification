import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { AdduserComponent } from './adduser/adduser.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [AdduserComponent, DisplayuserComponent, SortPipe],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
