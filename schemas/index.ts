
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
    code: z.optional(z.string())
  })

  export const orderSchema = z.object({
    country: z.string().min(2,{
        message:"Please select a country"
    }),
    email: z.string().email(),
    options: z.any(z.string()).nullable(),
    quantity: z.number()
  })

