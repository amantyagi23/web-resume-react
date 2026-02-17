import type { ContactFormData } from "../components/Contact";

export async function sendMail(data: ContactFormData): Promise<void> {
  try {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      throw new Error("Missing fields");
    }

    return;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something Went Wrong",
    );
  }
}
