"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteName } from "@/data/siteData";
import InputField from "@/components/shared/form/InputField";
import { TbAccessible } from "react-icons/tb";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";

type LoginFormProps = {
  className?: string;
};

export default function LoginForm({ className }: LoginFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Protection
  const { status } = useSession();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";
  if (status === "authenticated") redirect(redirectUrl);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const user = {
      email: formElement.email.value,
      password: formElement.password.value,
    };

    const res = await signIn("credentials", {
      ...user,
      redirect: false,
    });

    if (res?.error) {
      toast({
        variant: "destructive",
        description: res.error,
      });
      setLoading(false);
    } else {
      toast({
        description: "Logged in successfully!",
      });
    }
  };

  return (
    <section
      className={
        "grid place-items-center overflow-y-auto px-6 py-16 md:p-16 lg:p-20 " +
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
            <Button disabled={loading} type="submit" className="mt-4">
              {loading ? <ButtonLoader text="Authenticating..." /> : "Login"}
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
