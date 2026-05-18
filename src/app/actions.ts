"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type State = {
  success: boolean;
  message: string;
} | null;

export async function joinWaitlist(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Email inválido." };
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID as string,
  });

  if (error) {
    console.error("Erro ao adicionar contato:", error);
    return { success: false, message: "Algo deu errado. Tente novamente." };
  }

  return { success: true, message: "Você entrou na lista!" };
}
