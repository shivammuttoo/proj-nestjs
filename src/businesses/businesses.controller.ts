import { Controller, Get, HttpStatus, ParseIntPipe, Query } from '@nestjs/common';
import { BusinessType, BusinessesService } from './businesses.service';

@Controller('/businesses')
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Get('/users')
  businessUsers(): BusinessType[] {
    return this.businessesService.getBusinessUsers();
  }

  @Get('/jobs')
  getUserJobs(@Query('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) userId: number): any[] {
    return this.businessesService.getUserJobs(userId);
  }
  
}
