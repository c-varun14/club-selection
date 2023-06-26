import { z } from "zod";

export const loginFormSchema = z.object({
  std: z
    .number()
    .min(5)
    .max(10)
    .refine((value) => typeof value === "number", {
      message: "Enter your standard",
    }),
  rollNo: z.number().min(1).max(40),
  sec: z.string().min(1).max(1, "Select your section"),
});

export type loginFormInput = z.infer<typeof loginFormSchema>;
