import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../core/current-user.service';
import { MemberService } from '../../core/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private memberService: MemberService,
    private currentUserService: CurrentUserService
  ) {}
  loginForm!: FormGroup;

  submitForm(): void {
    const data = this.loginForm.getRawValue();
    this.memberService.login(data).subscribe({
      next: (res) => {
        this.currentUserService.update({
          accout: data.userName,
        });
        this.router.navigate(['']);
      },
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
