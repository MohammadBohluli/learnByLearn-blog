import Logo from "@/components/Logo";
import RowForm from "@/components/RowForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-700">
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

      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="relative block h-[195px] w-[calc(100%+1.3px)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
