import { z } from "zod";

export const signInValidation = z.object({
  email: z.string({
    required_error: "Digite seu email"
  }).email("Email inválido"),
  password: z.string({
    required_error: "Digite sua senha"
  }),
})

export type SignInData = z.infer<typeof signInValidation>