import { Controller, Get, Post, Body } from '@nestjs/common';
// import {CommonsService} from './commons.service'
import { Common} from './interfaces/common.interface'
import{CatsService}from './../cats/cats.service'

@Controller('commons')
export class CommonsController {
    constructor(private catsService: CatsService) {}
    @Post()
  async create(@Body() createCatDto: Common) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Common[]> {
    return this.catsService.findAll();
  }
}
