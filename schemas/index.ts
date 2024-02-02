
import { z } from "zod"

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2,{
        message:"Password is required"
    }),
  })

  export const preorderSchema = z.object({
    name: z.string().min(2,{
        message:"Name must be minimum of 2 characters"
    }),
    code: z.string().min(2,{
        message:"Code must be minimum of 2 characters"
    }),
  })