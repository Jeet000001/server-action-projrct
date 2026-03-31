"use server";
import dbConnect from "@/lib/dbConnection";
import { Contact } from "@/model/contact";

export const getContacts = async () => {
  try {
    await dbConnect();

    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));
  } catch (error) {
    console.error("Error fatching contacts:", error);
    return [];
  }
};
