import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  user!: User


  ngOnInit(): void {
    this.user = this.userService.getNewUser();
  }

  onSubmit(form: NgForm) {
    this.userService.loginNewUser(this.user)
    this.router.navigateByUrl('/')
  }

}