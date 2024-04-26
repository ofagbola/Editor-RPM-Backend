// package: 
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PatientSignupPayload extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): PatientSignupPayload;
    getLastName(): string;
    setLastName(value: string): PatientSignupPayload;
    getEmail(): string;
    setEmail(value: string): PatientSignupPayload;
    getDateOfBirth(): string;
    setDateOfBirth(value: string): PatientSignupPayload;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): PatientSignupPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatientSignupPayload.AsObject;
    static toObject(includeInstance: boolean, msg: PatientSignupPayload): PatientSignupPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatientSignupPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatientSignupPayload;
    static deserializeBinaryFromReader(message: PatientSignupPayload, reader: jspb.BinaryReader): PatientSignupPayload;
}

export namespace PatientSignupPayload {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: string,
        phoneNumber: string,
    }
}

export class ClinicianSignupPayload extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): ClinicianSignupPayload;
    getLastName(): string;
    setLastName(value: string): ClinicianSignupPayload;
    getEmail(): string;
    setEmail(value: string): ClinicianSignupPayload;
    getLocation(): string;
    setLocation(value: string): ClinicianSignupPayload;
    clearCredentialsList(): void;
    getCredentialsList(): Array<string>;
    setCredentialsList(value: Array<string>): ClinicianSignupPayload;
    addCredentials(value: string, index?: number): string;
    getEthnicity(): string;
    setEthnicity(value: string): ClinicianSignupPayload;
    getGender(): string;
    setGender(value: string): ClinicianSignupPayload;
    getLanguage(): string;
    setLanguage(value: string): ClinicianSignupPayload;
    clearSpecialtiesList(): void;
    getSpecialtiesList(): Array<string>;
    setSpecialtiesList(value: Array<string>): ClinicianSignupPayload;
    addSpecialties(value: string, index?: number): string;
    getImage(): string;
    setImage(value: string): ClinicianSignupPayload;
    getClinicName(): string;
    setClinicName(value: string): ClinicianSignupPayload;
    getClinicId(): string;
    setClinicId(value: string): ClinicianSignupPayload;
    getAcceptPatient(): boolean;
    setAcceptPatient(value: boolean): ClinicianSignupPayload;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): ClinicianSignupPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClinicianSignupPayload.AsObject;
    static toObject(includeInstance: boolean, msg: ClinicianSignupPayload): ClinicianSignupPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClinicianSignupPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClinicianSignupPayload;
    static deserializeBinaryFromReader(message: ClinicianSignupPayload, reader: jspb.BinaryReader): ClinicianSignupPayload;
}

export namespace ClinicianSignupPayload {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        location: string,
        credentialsList: Array<string>,
        ethnicity: string,
        gender: string,
        language: string,
        specialtiesList: Array<string>,
        image: string,
        clinicName: string,
        clinicId: string,
        acceptPatient: boolean,
        phoneNumber: string,
    }
}

export class LoginPayload extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginPayload;
    getPassword(): string;
    setPassword(value: string): LoginPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginPayload.AsObject;
    static toObject(includeInstance: boolean, msg: LoginPayload): LoginPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginPayload;
    static deserializeBinaryFromReader(message: LoginPayload, reader: jspb.BinaryReader): LoginPayload;
}

export namespace LoginPayload {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class CreatePasswordPayload extends jspb.Message { 
    getPassword(): string;
    setPassword(value: string): CreatePasswordPayload;
    getEmail(): string;
    setEmail(value: string): CreatePasswordPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePasswordPayload.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePasswordPayload): CreatePasswordPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePasswordPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePasswordPayload;
    static deserializeBinaryFromReader(message: CreatePasswordPayload, reader: jspb.BinaryReader): CreatePasswordPayload;
}

export namespace CreatePasswordPayload {
    export type AsObject = {
        password: string,
        email: string,
    }
}

export class VerifyAccountPayload extends jspb.Message { 
    getCode(): string;
    setCode(value: string): VerifyAccountPayload;
    getEmail(): string;
    setEmail(value: string): VerifyAccountPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyAccountPayload.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyAccountPayload): VerifyAccountPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyAccountPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyAccountPayload;
    static deserializeBinaryFromReader(message: VerifyAccountPayload, reader: jspb.BinaryReader): VerifyAccountPayload;
}

export namespace VerifyAccountPayload {
    export type AsObject = {
        code: string,
        email: string,
    }
}

export class VerifyOneTimePasswordPayload extends jspb.Message { 
    getCode(): string;
    setCode(value: string): VerifyOneTimePasswordPayload;
    getEmail(): string;
    setEmail(value: string): VerifyOneTimePasswordPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyOneTimePasswordPayload.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyOneTimePasswordPayload): VerifyOneTimePasswordPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyOneTimePasswordPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyOneTimePasswordPayload;
    static deserializeBinaryFromReader(message: VerifyOneTimePasswordPayload, reader: jspb.BinaryReader): VerifyOneTimePasswordPayload;
}

export namespace VerifyOneTimePasswordPayload {
    export type AsObject = {
        code: string,
        email: string,
    }
}

export class ForgotPayload extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): ForgotPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForgotPayload.AsObject;
    static toObject(includeInstance: boolean, msg: ForgotPayload): ForgotPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForgotPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForgotPayload;
    static deserializeBinaryFromReader(message: ForgotPayload, reader: jspb.BinaryReader): ForgotPayload;
}

export namespace ForgotPayload {
    export type AsObject = {
        email: string,
    }
}

export class ResetPayload extends jspb.Message { 
    getNewPassword(): string;
    setNewPassword(value: string): ResetPayload;
    getEmail(): string;
    setEmail(value: string): ResetPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetPayload.AsObject;
    static toObject(includeInstance: boolean, msg: ResetPayload): ResetPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetPayload;
    static deserializeBinaryFromReader(message: ResetPayload, reader: jspb.BinaryReader): ResetPayload;
}

export namespace ResetPayload {
    export type AsObject = {
        newPassword: string,
        email: string,
    }
}

export class InsurancePayload extends jspb.Message { 
    clearMedicalhistoryList(): void;
    getMedicalhistoryList(): Array<string>;
    setMedicalhistoryList(value: Array<string>): InsurancePayload;
    addMedicalhistory(value: string, index?: number): string;
    getProvider(): string;
    setProvider(value: string): InsurancePayload;
    getOutOfNetworkExpenses(): string;
    setOutOfNetworkExpenses(value: string): InsurancePayload;
    getCoPay(): string;
    setCoPay(value: string): InsurancePayload;
    getOutOfPocketExpenses(): string;
    setOutOfPocketExpenses(value: string): InsurancePayload;
    getEmail(): string;
    setEmail(value: string): InsurancePayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InsurancePayload.AsObject;
    static toObject(includeInstance: boolean, msg: InsurancePayload): InsurancePayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InsurancePayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InsurancePayload;
    static deserializeBinaryFromReader(message: InsurancePayload, reader: jspb.BinaryReader): InsurancePayload;
}

export namespace InsurancePayload {
    export type AsObject = {
        medicalhistoryList: Array<string>,
        provider: string,
        outOfNetworkExpenses: string,
        coPay: string,
        outOfPocketExpenses: string,
        email: string,
    }
}

export class Response extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Response;
    getStatuscode(): number;
    setStatuscode(value: number): Response;
    getData(): string;
    setData(value: string): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        message: string,
        statuscode: number,
        data: string,
    }
}
