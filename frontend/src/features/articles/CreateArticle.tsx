import RowForm from "@/components/RowForm";
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
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiple-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY_OPTIONS } from "@/data/constands";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { ArticleSchema, articleSchema, defaultValues } from "./shcema";

const CreateArticleForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid gap-3 md:grid-cols-2">
          {/* title input *****************************/}
          <RowForm>
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
          </RowForm>

          {/* category input *****************************/}
          <RowForm>
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
          </RowForm>

          {/* status input *****************************/}
          <RowForm>
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>وضعیت</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="flex-row-reverse">
                        <SelectValue />
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
          </RowForm>

          {/* image input *****************************/}
          <RowForm>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <img
                        className="h-64 w-64 rounded-md"
                        src={
                          selectedImage === null
                            ? "/preview.jpg"
                            : URL.createObjectURL(selectedImage)
                        }
                      />
                      {selectedImage && (
                        <Button
                          className="h-6 w-6 rounded-full"
                          variant={"destructive"}
                          size={"icon"}
                          onClick={() => {
                            setSelectedImage(null);
                            form.setValue("image", new File([], ""));
                          }}
                        >
                          <IoMdClose size={20} />
                        </Button>
                      )}
                    </div>
                    <FormControl
                      className="mb-2 mt-2 self-start rounded-md border
                     border-input px-4 py-2 hover:bg-black/5"
                    >
                      <div>
                        <Label htmlFor="image" className="cursor-pointer">
                          آپلود تصویر
                        </Label>
                        <Input
                          id="image"
                          className="hidden"
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setSelectedImage(file);
                              form.setValue("image", file);
                              field.onChange(file);
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </RowForm>
        </div>

        {/* content input *****************************/}
        <RowForm>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>متن مقاله</FormLabel>
                <FormControl>
                  <Textarea className="min-h-64" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </RowForm>

        <div className="">
          <Button
            className="w-full"
            variant={"outline"}
            size={"lg"}
            type="submit"
          >
            ثبت
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateArticleForm;
