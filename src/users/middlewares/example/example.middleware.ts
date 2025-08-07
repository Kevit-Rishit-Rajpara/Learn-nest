import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('ExampleMiddleware: Request received', req.headers);
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw new HttpException('Authorization header is missing', 401);
    }
    if (authorization === 'valid-token') {
      next();
    } else {
      console.log('Invalid authorization token');
      throw new HttpException('Invalid authorization token', 401);
    }
  }
}
