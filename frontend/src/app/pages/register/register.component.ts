import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../../core/member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  constructor(private memberService: MemberService, private router: Router) {}

  account: string;
  password: string;

  ngOnInit(): void {}

  submit(): void {
    this.memberService
      .register({
        account: this.account,
        password: this.password,
      })
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
      });
  }
}
