"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionException = void 0;
class DatabaseConnectionException extends Error {
    constructor(msg) {
        super(msg);
        this.name = "DatabaseConnectionException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatabaseConnectionException);
        }
    }
}
exports.DatabaseConnectionException = DatabaseConnectionException;
// export class CustomError extends Error {
//   constructor(
//     public readonly statusCode: number,
//     public readonly message: string
//   ) {
//     super(message);
//   }
//   static badRequest(message: string) {
//     return new CustomError(400, message);
//   }
// }
