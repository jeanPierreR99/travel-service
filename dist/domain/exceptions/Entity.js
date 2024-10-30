"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = exports.NotFoundException = void 0;
class NotFoundException extends Error {
    constructor(entitie, value) {
        super(`${entitie} with ID ${value} not found.`);
        this.name = "NotFoundException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundException);
        }
    }
}
exports.NotFoundException = NotFoundException;
class ConflictException extends Error {
    constructor(entitie, value) {
        super(`${entitie} ${value} already exists.`);
        this.name = "ConflictException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConflictException);
        }
    }
}
exports.ConflictException = ConflictException;
