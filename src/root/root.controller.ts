import { Controller, Get, Query, Inject, Middleware } from 'deojs';
import { RootService } from './root.service';

@Controller('/')
@Middleware((_req, _res, next) => next())
export class RootController {
  constructor(@Inject(RootService) private rootService: RootService) {}

  @Get('/')
  getName(@Query('name') name?: string) {
    return this.rootService.helloWorld(name);
  }
}
