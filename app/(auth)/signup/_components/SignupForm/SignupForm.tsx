"use client";
import InputField from "@/components/shared/form/InputField";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TbAccessible } from "react-icons/tb";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSession } from "next-auth/react";
import { useSearchParams, redirect } from "next/navigation";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";

export default function SignupForm() {
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const submitRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  // Protection
  const { status } = useSession();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";
  if (status === "authenticated") redirect(redirectUrl);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const formElement = event.target as HTMLFormElement;

    const user = {
      fname: formElement.fname?.value,
      lname: formElement.lname?.value,
      gender: gender,
      email: formElement.email?.value,
      password: formElement.password?.value,
      age: parseInt(formElement.age?.value),
      height: parseInt(formElement.height?.value),
      weight: parseInt(formElement.weight?.value),
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.okay) {
        toast({
          title: "Account created successfully!",
          description: "Now login to your account.",
        });
        router.push("/login");
      } else {
        console.log(data);
        toast({
          variant: "destructive",
          description: data.message,
        });
        setLoading(false);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message,
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => submitRef.current?.click()}
          >
            Try again
          </ToastAction>
        ),
      });
      console.log(error.message);
    }
  };
  return (
    <div className="grid place-items-center p-5 sm:p-10">
      <div>
        <div>
          <div className="text-center md:text-left">
            <TbAccessible
              className={"mx-auto mb-5 text-6xl text-messo-600 md:hidden"}
            />
            <h1 className="text-2xl font-semibold md:text-3xl">
              Create your account
            </h1>
            <p className="my-4 mb-10 text-sm text-gray-600">
              Make your messy life organized with our simple yet powerful app.{" "}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Name input */}
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField
                name={"fname"}
                label={"First name"}
                type={"text"}
                placeholder={"First name"}
              />
              <InputField
                name={"lname"}
                label={"Last name"}
                type={"text"}
                placeholder={"Last name"}
              />
            </div>

            {/* Gender input */}
            <div>
              <h4 className="mb-2 block text-sm font-semibold text-gray-600">
                Your gender?
              </h4>
              <div className="grid gap-5 sm:grid-cols-2">
                <div
                  className={
                    "flex cursor-pointer items-center rounded-lg border px-4 py-3 " +
                    (gender === "male"
                      ? "border-messo-600 bg-blue-50 text-messo-600"
                      : "border-gray-300")
                  }
                  onClick={() => setGender("male")}
                >
                  <div
                    className={
                      "mr-3 h-3 w-3 rounded-full border-2 border-white outline outline-1 " +
                      (gender === "male"
                        ? "bg-messo-600 outline-messo-600"
                        : "outline-gray-400")
                    }
                  ></div>
                  <p
                    className={
                      gender === "male" ? "font-semibold" : "font-normal"
                    }
                  >
                    Male
                  </p>
                </div>
                <div
                  className={
                    "flex cursor-pointer items-center rounded-lg border px-4 py-3 " +
                    (gender === "female"
                      ? "border-messo-600 bg-blue-50 text-messo-600"
                      : "border-gray-300")
                  }
                  onClick={() => setGender("female")}
                >
                  <div
                    className={
                      "mr-3 h-3 w-3 rounded-full border-2 border-white outline outline-1 " +
                      (gender === "female"
                        ? "bg-messo-600 outline-messo-600"
                        : "outline-gray-400")
                    }
                  ></div>
                  <p
                    className={
                      gender === "female" ? "font-semibold" : "font-normal"
                    }
                  >
                    Female
                  </p>
                </div>
              </div>
            </div>

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

            {/* Height and weight */}
            <div className="grid gap-6 sm:grid-cols-3">
              <InputField
                name={"age"}
                label={"Age(yrs)"}
                type={"number"}
                placeholder={"Ex. 25"}
                min={18}
                max={50}
              />

              <InputField
                name={"height"}
                label={"Height(cm)"}
                type={"number"}
                placeholder={"Ex. 150"}
                min={50}
              />

              <InputField
                name={"weight"}
                label={"Weight(kgs)"}
                type={"number"}
                placeholder={"Ex. 50"}
                min={40}
                max={120}
              />
            </div>
            <Button
              ref={submitRef}
              disabled={loading}
              type="submit"
              className="mt-4"
            >
              {loading ? <ButtonLoader /> : "Create Account"}
            </Button>
          </form>

          <small className="mt-10 block text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-blue-600 hover:underline"
            >
              Log In
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
