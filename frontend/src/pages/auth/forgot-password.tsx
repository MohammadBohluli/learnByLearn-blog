import Logo from "@/components/Logo";
import RowForm from "@/components/RowForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <Card className="z-50 mx-2 max-w-md flex-1 py-9 shadow-lg">
      <CardHeader className="text-center">
        <Logo className="text-5xl" />
      </CardHeader>
      <CardContent>
        <form>
          <RowForm>
            <Label htmlFor="email-login">ایمیل</Label>
            <Input
              dir="ltr"
              id="email-login"
              type="text"
              placeholder="example@gmail.com"
              className="mt-1"
            />
          </RowForm>
          <RowForm>
            <Label htmlFor="password-login">کلمه عبور</Label>
            <Input
              dir="ltr"
              id="password-login"
              type="password"
              placeholder="********"
              className="mt-1 text-inherit"
            />
          </RowForm>
          <RowForm className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <Checkbox id="remember-me" />
              <Label className="font-normal" htmlFor="remember-me">
                من را به یاد داشته باش
              </Label>
            </div>
            <div>
              <Link to={"/"} className="text-blue-500">
                رمز عبورم را فراموش کردم
              </Link>
            </div>
          </RowForm>
          <RowForm className="mb-2 mt-[60px]">
            <Button variant={"default"} className="w-full text-lg">
              ورود
            </Button>
          </RowForm>
        </form>
        <Button variant={"secondary"} className="w-full">
          <Link to={"/"}>ثبت نام</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
