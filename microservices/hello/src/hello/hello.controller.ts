import { Body, Controller, Get, Param } from '@nestjs/common';
import { HelloService } from './hello.service';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloReply, HelloRequest } from './proto/hello';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @GrpcMethod('HelloController', 'Hello')
  @Get()
  Hello(name: HelloRequest): HelloReply {
    return this.helloService.sayHello(name);
  }
}
