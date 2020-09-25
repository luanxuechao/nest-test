import { Injectable } from '@nestjs/common';
import {Common} from './interfaces/common.interface'

@Injectable()
export class CommonsService {
    private readonly commons: Common[] = [];

    create(cat: Common) {
      this.commons.push(cat);
    }
  
    findAll(): Common[] {
      return this.commons;
    }
}
