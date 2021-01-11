import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './user/adduser/adduser.component';
import { DisplayuserComponent } from './user/displayuser/displayuser.component';

const routes: Routes = [
  {path:'', redirectTo:'/addUser', pathMatch:'full'},
  {path:'addUser', component:AdduserComponent},
  {path:'displayUser', component:DisplayuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
