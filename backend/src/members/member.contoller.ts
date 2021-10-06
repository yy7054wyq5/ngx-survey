import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Member } from './member.entity';
import { MemberService } from './member.service';

@Controller()
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/register') r(@Req() request: Request): void | Promise<void> {
    const body = request.body;
    if (body && body.account && body.password) {
      return this.memberService.find(body.account).then((data) => {
        console.log(data);
        if (!data.length) {
          this.memberService.insert(body).then(() => {});
          return;
        }
        console.error('账号已存在');
        throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
      });
    }
    throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
  }

  @Post('/login') l(@Req() request: Request): void | Promise<void> {
    const body = request.body;
    if (body && body.account && body.password) {
      return this.memberService
        .find(body.account, body.password)
        .then((data) => {
          console.log(data);
          if (data.length) {
            return;
          }
          console.error('账号不存在或密码错误');
          throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        });
    }
    throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
  }
}
