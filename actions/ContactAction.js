"use server";

import dbConnect from "@/lib/dbConnection";
import Contact from "@/model/contact";

export const createContact = async (formData) => {
  try {
    await dbConnect();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required4",
      };
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return{
        success: true,
        message: "Message sent successfully",
        contactId: contact._id.toString()
    }
  } catch (error) {
    console.error("Error creating contact: ", error)
    return{
        success: false,
        error: "Something went wrong. please try again."
    }
  }
};
