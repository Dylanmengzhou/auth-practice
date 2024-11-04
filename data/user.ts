import { db } from "@/lib/db";


/**
 * Retrieves a user from the database based on their email.
 *
 * @async
 * @function getUserByEmail
 * @param {string} email - The email address of the user to be retrieved.
 * @returns {Promise<Object|null>} Returns a user object if found, or null if not found or an error occurs.
 * @throws Will not explicitly throw an error but returns null in case of failure.
 *
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch {
    return null;
  }
};
