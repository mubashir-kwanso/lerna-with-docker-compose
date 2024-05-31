import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getProjectInfo() {
    return {
      project_name: this.configService.get('PROJECT_NAME'),
    };
  }
}
