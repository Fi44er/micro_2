import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { HELLO_CONTROLLER_SERVICE_NAME, HelloControllerClient, HelloReply, HelloRequest } from './hello';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
@Controller('hello')
export class HelloController implements OnModuleInit {
  private helloClient: HelloControllerClient

  @Inject(HELLO_CONTROLLER_SERVICE_NAME)
  private readonly client: ClientGrpc

  public onModuleInit() {
    this.helloClient = this.client.getService<HelloControllerClient>(HELLO_CONTROLLER_SERVICE_NAME)
  }

  @Get(':name')
  Hello(@Param('name') name: string): Observable<HelloReply> {
    return this.helloClient.hello({name})
  }
}
