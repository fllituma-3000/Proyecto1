import { Controller, Get, Post, Put, Patch, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  Users(): string {
    return this.appService.crear();
  }

  @Get('users')
  users(): string {
    return this.appService.users();
  }
 
  @Get('users/:id')
  users15(@Param('id') id: string): string {
    return this.appService.users15(id);
  }
  
  @Put('users/:id')
  users16(@Param('id') id: string): string {
    return this.appService.users16(id);
  }

  @Patch('users/:id')
  users17(@Param('id') id: string): string {
    return this.appService.users17(id);
  }

  @Delete('users/:id')
  users18(@Param('id') id: string): string {
    return this.appService.users18(id);
  }
}

