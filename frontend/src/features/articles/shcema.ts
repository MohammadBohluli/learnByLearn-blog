import z from "zod";
const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const articleSchema = z.object({
  title: z.string().min(3, { message: "عنوان نباید از 10 کاراکتر کمتر باشد" }),
  status: z.enum(["published", "draft"]),
  category: z
    .array(optionSchema)
    .min(1, { message: "حداقل یک مورد را انتخاب کنید" }),
  content: z.string().min(10, { message: "این فیلد نباید خالی باشد" }),
  image: z.string(),
});

export type ArticleSchema = z.infer<typeof articleSchema>;

export const defaultValues: ArticleSchema = {
  title: "",
  status: "draft",
  category: [],
  content: "",
  image: "",
};
