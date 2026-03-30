import mongoose from "mongoose";

const ContactShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      trim: true,
      maxlength: [50, "Name Can't exceed 50 character"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    subject: {
      type: String,
      required: [true, "Subject is Required"],
      trim: true,
      maxlength: [500, "Subject Can't exceed 500 character"],
    },
    message: {
      type: String,
      required: [true, "Message is Required"],
      trim: true,
      maxlength: [1000, "Message Can't exceed 1000 character"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: true },
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactShema);
