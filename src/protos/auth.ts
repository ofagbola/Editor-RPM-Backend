/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SignupPayload {
  phoneNumber: string;
}

export interface FinishSignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
}

export interface VerifyAccountPayload {
  code: string;
  phoneNumber: string;
}

export interface ResponseData {
  data: { [key: string]: string };
}

export interface ResponseData_DataEntry {
  key: string;
  value: string;
}

export interface Response {
  message: string;
  statusCode: number;
}

function createBaseSignupPayload(): SignupPayload {
  return { phoneNumber: "" };
}

export const SignupPayload = {
  encode(message: SignupPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phoneNumber !== "") {
      writer.uint32(10).string(message.phoneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignupPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignupPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phoneNumber = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignupPayload {
    return { phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : "" };
  },

  toJSON(message: SignupPayload): unknown {
    const obj: any = {};
    if (message.phoneNumber !== "") {
      obj.phoneNumber = message.phoneNumber;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignupPayload>, I>>(base?: I): SignupPayload {
    return SignupPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignupPayload>, I>>(object: I): SignupPayload {
    const message = createBaseSignupPayload();
    message.phoneNumber = object.phoneNumber ?? "";
    return message;
  },
};

function createBaseFinishSignUpPayload(): FinishSignUpPayload {
  return { firstName: "", lastName: "", email: "", dateOfBirth: "", password: "" };
}

export const FinishSignUpPayload = {
  encode(message: FinishSignUpPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishSignUpPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishSignUpPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinishSignUpPayload {
    return {
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: FinishSignUpPayload): unknown {
    const obj: any = {};
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishSignUpPayload>, I>>(base?: I): FinishSignUpPayload {
    return FinishSignUpPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishSignUpPayload>, I>>(object: I): FinishSignUpPayload {
    const message = createBaseFinishSignUpPayload();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseVerifyAccountPayload(): VerifyAccountPayload {
  return { code: "", phoneNumber: "" };
}

export const VerifyAccountPayload = {
  encode(message: VerifyAccountPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.phoneNumber !== "") {
      writer.uint32(18).string(message.phoneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAccountPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyAccountPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.phoneNumber = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyAccountPayload {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : "",
    };
  },

  toJSON(message: VerifyAccountPayload): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.phoneNumber !== "") {
      obj.phoneNumber = message.phoneNumber;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyAccountPayload>, I>>(base?: I): VerifyAccountPayload {
    return VerifyAccountPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerifyAccountPayload>, I>>(object: I): VerifyAccountPayload {
    const message = createBaseVerifyAccountPayload();
    message.code = object.code ?? "";
    message.phoneNumber = object.phoneNumber ?? "";
    return message;
  },
};

function createBaseResponseData(): ResponseData {
  return { data: {} };
}

export const ResponseData = {
  encode(message: ResponseData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      ResponseData_DataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ResponseData_DataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.data[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseData {
    return {
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ResponseData): unknown {
    const obj: any = {};
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseData>, I>>(base?: I): ResponseData {
    return ResponseData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseData>, I>>(object: I): ResponseData {
    const message = createBaseResponseData();
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseResponseData_DataEntry(): ResponseData_DataEntry {
  return { key: "", value: "" };
}

export const ResponseData_DataEntry = {
  encode(message: ResponseData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseData_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseData_DataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ResponseData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseData_DataEntry>, I>>(base?: I): ResponseData_DataEntry {
    return ResponseData_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseData_DataEntry>, I>>(object: I): ResponseData_DataEntry {
    const message = createBaseResponseData_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseResponse(): Response {
  return { message: "", statusCode: 0 };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.statusCode !== 0) {
      writer.uint32(16).int32(message.statusCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.message = object.message ?? "";
    message.statusCode = object.statusCode ?? 0;
    return message;
  },
};

export interface AuthServices {
  Signup(request: SignupPayload): Promise<Response>;
  VerifyAccount(request: VerifyAccountPayload): Promise<Response>;
  FinishUpAccount(request: FinishSignUpPayload): Promise<Response>;
}

export const AuthServicesServiceName = "AuthServices";
export class AuthServicesClientImpl implements AuthServices {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AuthServicesServiceName;
    this.rpc = rpc;
    this.Signup = this.Signup.bind(this);
    this.VerifyAccount = this.VerifyAccount.bind(this);
    this.FinishUpAccount = this.FinishUpAccount.bind(this);
  }
  Signup(request: SignupPayload): Promise<Response> {
    const data = SignupPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "Signup", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }

  VerifyAccount(request: VerifyAccountPayload): Promise<Response> {
    const data = VerifyAccountPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "VerifyAccount", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }

  FinishUpAccount(request: FinishSignUpPayload): Promise<Response> {
    const data = FinishSignUpPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinishUpAccount", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
