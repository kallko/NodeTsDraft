const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const UserSchema = new Schema(
  {
    id: { type: Number, index: true, unique: true, sparse: true },
    login: { type: String, index: true, unique: true },
    password: { type: String },
  },
  { strict: true }
);
