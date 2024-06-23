import z from "zod";

const notEmpty = z
  .string()
  .trim()
  .min(1, { message: "پر کردن این فیلد اجباری است" });

export const userSchema = z.object({
  firstName: z.string().pipe(notEmpty),
  lastName: z.string().pipe(notEmpty),
  email: z.string().email({ message: "پر کردن این فیلد اجباری است" }),
  bio: z
    .string()
    .min(10, {
      message: "تعداد کاراکتر ها نباید کمتر از 10 باشد",
    })
    .max(160, {
      message: "تعداد کاراکتر ها نباید بیشتر از 30 باشد",
    }),
  image: z.instanceof(File).optional(),
  birthDay: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserSchema = z.infer<typeof userSchema>;

export const defaultValues: UserSchema = {
  firstName: "",
  lastName: "",
  email: "",
  bio: "",
  image: new File([], ""),
  birthDay: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};
