"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteName } from "@/data/siteData";
import InputField from "@/components/shared/form/InputField";
import { TbAccessible } from "react-icons/tb";

type LoginFormProps = {
  className?: string;
};

export default function LoginForm({ className }: LoginFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const formData = {
      email: formElement.email.value,
      password: formElement.password.value,
    };

    // signIn('credentials', {
    //   redirect: false,
    //   ...formData,
    // });
  };
  return (
    <section
      className={
        "grid place-items-center overflow-y-auto  px-8 py-16 md:p-16 lg:p-20 " +
        className
      }
    >
      <div>
        <div>
          <TbAccessible
            className={"mx-auto mb-5 text-6xl  text-messo-600 md:hidden"}
          />
          <h1 className="text-center text-2xl font-semibold md:text-left md:text-3xl">
            Welcome to <span className="text-messo-600">{siteName}</span>
          </h1>
          <p className="my-4 mb-10 text-center text-sm text-gray-500 md:text-left">
            Make your messy life organized with our simple yet powerful app.{" "}
          </p>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Email input */}
            <InputField
              name={"email"}
              label={"Email Address"}
              type={"email"}
              placeholder={"Ex. yourmail@gmail.com"}
            />
            {/* Password input */}
            <InputField
              name={"password"}
              label={"Password"}
              type={"password"}
              placeholder={"Choose a strong password"}
            />
            <Button type="submit" className="mt-4">
              Login
            </Button>
          </form>

          <small className="mt-10 block text-center text-gray-500">
            Do not have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-messo-600 hover:underline"
            >
              Sign up
            </Link>
          </small>
        </div>
      </div>
    </section>
  );
}
