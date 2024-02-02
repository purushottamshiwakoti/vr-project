
import { z } from "zod"

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2,{
        message:"Password is required"
    }),
  })