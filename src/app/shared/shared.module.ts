import { Module, OnModuleInit, } from '@nestjs/common';
import { LoggerService, } from './services/logger.service';
import { UtilService, } from './services/util.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ UtilService, ],
  exports: [ UtilService, ],
})
export class SharedModule implements OnModuleInit {
  private readonly logger: LoggerService;

  constructor() {
    this.logger = new LoggerService(SharedModule.name);
  }

  onModuleInit() {
    this.logger.log('Module initiated and ready');
  }
}
