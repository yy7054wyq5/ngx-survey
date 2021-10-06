import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  findAll(): Promise<Member[]> {
    return this.membersRepository.find();
  }

  find(account: string, password?: string): Promise<Member[]> {
    const a = {
      account,
    };
    let b;
    if (password) {
      b = {
        account,
        password,
      };
    }
    return this.membersRepository.find(b || a);
  }

  insert(data: { account: string; password: string }) {
    console.log(data);
    return this.membersRepository.insert({
      account: data.account,
      password: data.password,
    });
  }

  async remove(id: string): Promise<void> {
    await this.membersRepository.delete(id);
  }
}
