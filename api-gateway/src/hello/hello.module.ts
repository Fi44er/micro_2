import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HELLO_CONTROLLER_SERVICE_NAME } from './hello';
import { resolve } from 'path';

@Module({
  controllers: [HelloController],
  imports: [
    ClientsModule.register([
      {
        name: HELLO_CONTROLLER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: 'hello',
          protoPath: resolve(__dirname, '../../../proto/hello.proto')
        }
      }
    ])
  ]
})
export class HelloModule {}
