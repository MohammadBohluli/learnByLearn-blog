import RowForm from "@/components/RowForm";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { faIR } from "date-fns/locale";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TbCloudUpload } from "react-icons/tb";
import { UserSchema, defaultValues, userSchema } from "./schema";

const UserProfileForm = () => {
  const [previewImage, setPreviewImage] = useState<File | null>(null);
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    mode: "all",
    defaultValues,
  });

  const onSubmit: SubmitHandler<UserSchema> = (data) => {
    console.log(data);
  };

  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle>پروفایل کاربری</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="pt-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* image input ******************************/}
            <RowForm>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="relative flex justify-center">
                    {previewImage && (
                      <Button
                        className="absolute z-50 h-6 w-6 -translate-y-1 rounded-full"
                        variant={"destructive"}
                        size={"icon"}
                        onClick={() => {
                          setPreviewImage(null);
                          form.setValue("image", new File([], ""));
                        }}
                      >
                        <IoMdClose size={20} />
                      </Button>
                    )}
                    <FormControl>
                      <div className="h-52 w-52 overflow-hidden rounded-full">
                        <img
                          src={
                            previewImage === null
                              ? "/profile-1.webp"
                              : URL.createObjectURL(previewImage)
                          }
                          alt=""
                          className="h-full w-full transition-all hover:scale-105"
                        />
                        <Label
                          htmlFor="profile-img"
                          className="absolute bottom-0 flex h-10 w-10 -translate-x-5 
                          cursor-pointer items-center justify-center rounded-full bg-secondary
                           p-1 text-secondary-foreground hover:bg-secondary/80"
                        >
                          <TbCloudUpload size={25} />
                        </Label>
                        <Input
                          id="profile-img"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setPreviewImage(file);
                              form.setValue("image", file);
                              field.onChange(file);
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </RowForm>

            {/* firstName input ******************************/}
            <RowForm>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormLabel>نام</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </RowForm>

            {/* lastName input ******************************/}
            <RowForm>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormLabel>نام خانوادگی</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </RowForm>

            {/* email input ******************************/}
            <RowForm>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </RowForm>

            {/* birthDay input ******************************/}
            <RowForm>
              <FormField
                control={form.control}
                name="birthDay"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="pb-1">تاریخ تولد</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant={"outline"}>
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>تنظیم تاریخ</span>
                            )}
                            <SlCalender size={20} className="mr-auto" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          locale={faIR}
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </RowForm>

            {/* bio input ******************************/}
            <RowForm>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>درباره من</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </RowForm>

            <Button variant={"secondary"} className="mt-8 w-full" type="submit">
              ذخیره
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserProfileForm;
