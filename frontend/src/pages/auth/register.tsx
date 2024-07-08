import Logo from "@/components/logo";
import RowForm from "@/components/RowForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Card className="z-50 mx-2 max-w-md flex-1 pt-9 shadow-lg">
      <CardHeader className="text-center">
        <Logo className="text-5xl" />
      </CardHeader>
      <CardContent>
        <form>
          <RowForm>
            <Label htmlFor="name">نام</Label>
            <Input id="name" type="text" className="mt-1" />
          </RowForm>
          <RowForm>
            <Label htmlFor="family">نام خانوادگی</Label>
            <Input id="family" type="text" className="mt-1" />
          </RowForm>
          <RowForm>
            <Label htmlFor="email-login">ایمیل</Label>
            <Input
              id="email-login"
              type="text"
              placeholder="example@gmail.com"
              className="mt-1"
            />
          </RowForm>
          <RowForm>
            <Label htmlFor="password-login1">کلمه عبور</Label>
            <Input
              dir="ltr"
              id="password-login1"
              type="password"
              placeholder="********"
              className="mt-1 text-inherit"
            />
          </RowForm>
          <RowForm>
            <Label htmlFor="password-login2">تکرار کلمه عبور</Label>
            <Input
              dir="ltr"
              id="password-login2"
              type="password"
              placeholder="********"
              className="mt-1 text-inherit"
            />
          </RowForm>

          <Button variant={"default"} className="mt-3 w-full text-lg">
            ثبت نام
          </Button>
        </form>
        <div className="mt-4 flex justify-center gap-2">
          <p>قبلا ثبت نام کردی ؟</p>
          <Link to={"/"} className="text-blue-500">
            وارد شوید
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
