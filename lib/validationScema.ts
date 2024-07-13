import { z } from "zod";

export const formSchema = (type: string) => z.object({
    email: z.string().email(),
    password: z.string().min(8),

    //sign - up
    firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    address1: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(50),
    city: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(50),
    state: type === 'sign-in' ? z.string().optional() : z.string().min(2).max(5),
    postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(7),
    dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    aadhar: type === 'sign-in' ? z.string().optional() : z.string().min(3)
})