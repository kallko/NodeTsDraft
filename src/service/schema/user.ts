const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Ajv from "ajv";
import { User } from "../../@type/user";
const ajv = new Ajv();

export const UserSchema = new Schema(
  {
    id: { type: Number, index: true, unique: true, sparse: true },
    login: { type: String, index: true },
    password: { type: String, index: true },
  },
  { strict: true }
);

export const validateUserCreation = (user: User, strict: boolean) => {
  const required = strict ? ["login", "password"] : [];
  return ajv.validate(
    {
      type: "object",
      properties: {
        login: { type: "string" },
        password: { type: "number" },
      },
      additionalProperties: false,
      required,
    },
    user
  );
};
