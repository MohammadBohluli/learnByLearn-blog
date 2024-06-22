import z from "zod";
const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const MAX_FILE_SIZE = 1024 * 1024 * 4;

export const articleSchema = z.object({
  title: z.string().min(3, { message: "عنوان نباید از 10 کاراکتر کمتر باشد" }),
  status: z.enum(["published", "draft"]),
  category: z
    .array(optionSchema)
    .min(1, { message: "حداقل یک مورد را انتخاب کنید" }),
  content: z.string().min(10, { message: "مقاله باید حاوی محتوا باشد" }),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "فایل نباید بزرگ تر از 3 مگابایت باشد",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "لطفا یک تصویر آپلود کنید",
    }),
});

export type ArticleSchema = z.infer<typeof articleSchema>;

export const defaultValues: ArticleSchema = {
  title: "",
  status: "draft",
  category: [],
  content: "",
  image: new File([], ""),
};
