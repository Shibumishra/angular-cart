import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/User';
import { UserService } from '../../services/User/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[] = [] as User[];
  public errorMessage: string | undefined = undefined;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public getUsersData() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

}
