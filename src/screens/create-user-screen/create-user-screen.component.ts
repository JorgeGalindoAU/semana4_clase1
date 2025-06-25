import { Component } from '@angular/core';
import { GoBackButtonComponent } from "../../components/go-back-button/go-back-button.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUserJob } from '../../interfaces/user.interface';

@Component({
  selector: 'app-create-user-screen',
  imports: [GoBackButtonComponent, FormsModule, CommonModule],
  templateUrl: './create-user-screen.component.html',
  styleUrl: './create-user-screen.component.css'
})
export class CreateUserScreenComponent {
  userJob: IUserJob = {
    name: "",
    job: ""
  };

  createUser() {
    console.log(this.userJob);
  }
}
