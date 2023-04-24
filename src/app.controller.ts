import { Body, Controller, Post } from '@nestjs/common'
import { CreateMemberBody } from './dtos/create-member-body'
import { MembersRepository } from './repositories/members-repositories'

@Controller()
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Post()
  async createMember(@Body() body: CreateMemberBody) {
    const { name, function: memberFunction } = body

    await this.membersRepository.create(name, memberFunction)
  }
}
