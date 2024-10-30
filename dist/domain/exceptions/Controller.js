"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerException = void 0;
class ControllerException extends Error {
    constructor(msg) {
        super(`${msg}`);
        this.name = "ControllerException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ControllerException);
        }
    }
}
exports.ControllerException = ControllerException;
