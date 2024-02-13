import { Injectable } from '@nestjs/common';
import { HelloReply, HelloRequest } from './proto/hello';

@Injectable()
export class HelloService {
     sayHello(name: HelloRequest): HelloReply {
        console.log(name)
        return {message: `Hello ${name.name}`};
    }
}
