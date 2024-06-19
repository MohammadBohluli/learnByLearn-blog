import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/ui/multiple-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY_OPTIONS } from "@/data/constands";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArticleSchema, articleSchema, defaultValues } from "./shcema";

const CreateArticle = () => {
  const form = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
    mode: "all",
    defaultValues,
  });

  const onSubmit: SubmitHandler<ArticleSchema> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* title input *****************************/}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>عنوان</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status input *****************************/}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>وضعیت</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="وضعیت مقاله" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="published">منتشر شده</SelectItem>
                  <SelectItem value="draft">پیش نویس</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* category input *****************************/}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>دسته بندی</FormLabel>
              <FormControl>
                <MultipleSelector
                  {...field}
                  hidePlaceholderWhenSelected
                  defaultOptions={CATEGORY_OPTIONS}
                  placeholder="دسته بندی..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"outline"}
          type="submit"
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          ثبت
        </Button>
      </form>
    </Form>
  );
};

export default CreateArticle;
