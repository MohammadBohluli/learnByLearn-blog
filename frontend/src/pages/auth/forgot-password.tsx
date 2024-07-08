import Logo from "@/components/logo";
import RowForm from "@/components/RowForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ForgotPassword() {
  return (
    <Card className="z-50 mx-2 max-w-md flex-1 pt-9 shadow-lg">
      <CardHeader className=" text-center">
        <Logo className="mb-6 text-5xl" />
        <CardDescription className="text-right">
          لطفا ایمیلی که قبلا با آن ثبت نام کرده اید را وارد نمایید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <RowForm>
            <Input
              dir="ltr"
              type="text"
              placeholder="example@gmail.com"
              className="mt-1"
            />
          </RowForm>

          <Button variant={"default"} className="mt-6 w-full text-lg">
            ارسال
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
