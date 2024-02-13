/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "hello";

export interface HelloRequest {
  name: string;
}

export interface HelloReply {
  message: string;
}

export const HELLO_PACKAGE_NAME = "hello";

export interface HelloControllerClient {
  hello(request: HelloRequest): Observable<HelloReply>;
}

export interface HelloControllerController {
  hello(request: HelloRequest): Promise<HelloReply> | Observable<HelloReply> | HelloReply;
}

export function HelloControllerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["hello"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("HelloController", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("HelloController", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const HELLO_CONTROLLER_SERVICE_NAME = "HelloController";
