"use client";
import React, { useState } from "react";
import InfoCard from "./InfoCard/InfoCard";
import colors from "tailwindcss/colors";
// Importing icons
import { FaMale, FaTachometerAlt, FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { TbCalendarTime, TbEdit } from "react-icons/tb";
import { BiDumbbell } from "react-icons/bi";
import { useGetUser } from "@/context/UserProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputField from "@/components/shared/form/InputField";
import { toast } from "@/components/ui/use-toast";

export default function HealthInfo() {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user, setUser } = useGetUser();
  const { weight, height, age, gender, email } = user;

  let bmi = weight / ((height / 100) * (height / 100));
  bmi = parseFloat(bmi.toFixed(2));
  let bodyStatus;
  if (bmi < 18.5) {
    bodyStatus = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bodyStatus = "normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bodyStatus = "overweight";
  } else {
    bodyStatus = "obesity";
  }

  // Handle dialog open
  const handleDialogOpen = () => {
    setDialogOpen(!dialogOpen);
  };

  // Edit profile
  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const info = {
      email: email,
      weight: parseFloat(formElement.weight.value),
      height: parseFloat(formElement.height.value),
      age: parseFloat(formElement.age.value),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/update-user`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      },
    );

    const updated = await res.json();
    setLoading(false);
    if (updated.ok) {
      toast({
        title: updated.message,
      });
      setUser({ ...user, ...info });
      setDialogOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: updated.message,
      });
    }
  };

  return (
    <div className="mt-7 whitespace-nowrap">
      {/* Update profile modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <h2 className="flex items-center justify-between pb-2 text-lg font-bold text-blue-900 sm:text-xl">
          <span>Health information</span>
          <DialogTrigger asChild>
            <Button
              variant={"outline"}
              className="gap-2"
              onClick={handleDialogOpen}
            >
              <TbEdit className={"cursor-pointer text-xl"} />
              <span className="hidden sm:inline-block">Edit</span>
            </Button>
          </DialogTrigger>
        </h2>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Your Health Info</DialogTitle>
            <DialogDescription>
              Try to be as accurate as possible!
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="mb-8 mt-3 grid items-center gap-5">
              <InputField
                name="weight"
                label="Your Weight (kgs)"
                placeholder="Weight"
                defaultValue={weight}
                type="number"
                min={40}
                max={120}
                step={0.1}
              />
              <InputField
                name="height"
                label="Your Height (cm)"
                placeholder="Height"
                defaultValue={height}
                type="number"
                min={100}
                max={200}
                step={0.1}
              />
              <InputField
                name="age"
                label="Your Age (yrs)"
                placeholder="Age"
                defaultValue={age}
                type="number"
                min={18}
                max={70}
                step={0.1}
              />
            </div>

            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <span className="loader"></span>
                ) : (
                  <span>Update</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Displaying all the info */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard
          title="Your current weight"
          data={weight + " kg"}
          icon={<FaWeight />}
          iconColor={colors.blue[500]}
          bgColor={colors.blue[100]}
        />

        <InfoCard
          title="Your current height"
          data={height + " cm"}
          icon={<GiBodyHeight />}
          iconColor={colors.red[500]}
          bgColor={colors.red[100]}
        />

        <InfoCard
          title="Your current age"
          data={age + " years old"}
          icon={<TbCalendarTime />}
          iconColor={colors.green[500]}
          bgColor={colors.green[100]}
        />

        <InfoCard
          title="Your current BMI"
          data={`${bmi} (${bodyStatus})`}
          icon={<FaTachometerAlt />}
          iconColor={colors.lime[500]}
          bgColor={colors.lime[100]}
        />

        <InfoCard
          title="Your current goal"
          data={
            bodyStatus === "underweight"
              ? "Gain Weight"
              : bodyStatus === "normal"
              ? "Maintain Weight"
              : "Lose weight"
          }
          icon={<BiDumbbell />}
          iconColor={colors.fuchsia[500]}
          bgColor={colors.fuchsia[100]}
        />

        <InfoCard
          title="Your gender"
          data={gender}
          icon={<FaMale className="text-4xl text-orange-500" />}
          iconColor={colors.orange[500]}
          bgColor={colors.orange[100]}
        />
      </div>
    </div>
  );
}
