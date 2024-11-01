"use server";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // check if we have existing user
  const existingUser = await getUserByEmail(email)

  console.log(existingUser);

  if (existingUser) {
    return { error: "Email is already registered!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Todo: Send varification token email

  return { success: "User created!" };
};
