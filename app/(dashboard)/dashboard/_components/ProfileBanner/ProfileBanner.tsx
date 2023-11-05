import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGetUser } from "@/context/UserProvider";
import { TbEdit } from "react-icons/tb";
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
import { BsCloudUpload } from "react-icons/bs";

export default function ProfileBanner() {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user, setUser } = useGetUser();
  const { fname, lname, email, img } = user;
  const [imgLink, setImgLink] = useState<string>(img);
  const fileRef = useRef<HTMLInputElement>(null);

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
      fname: formElement.fname.value,
      lname: formElement.lname.value,
      img: img,
    };

    // Update profile
    const updateDatabase = async () => {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}api/update-user`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        });

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
      } catch (error) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Failed to update user data!",
        });
      }
    };

    const imgFile = formElement.img.files[0];

    if (imgFile) {
      const data = new FormData();
      data.append("file", imgFile);
      data.append("upload_preset", "messo_media");
      data.append("folder", "MessO/dp");
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME ?? "");

      try {
        const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/`;

        const uploadImg = async () => {
          const res = await fetch(url, {
            method: "POST",
            body: data,
          });
          const result = await res.json();

          if (result.secure_url) {
            info["img"] = result.secure_url;
          }
        };
        await uploadImg();
        updateDatabase();
      } catch (error) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Failed to upload image!",
        });
      }
    } else {
      updateDatabase();
    }
  };

  return (
    <div>
      <div className="h-[100px] w-full rounded-xl bg-gradient-to-r from-messo-500 to-messo-400 sm:h-[200px]"></div>

      <div className="relative h-20 sm:h-28">
        {/* profile edit modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <div className="group absolute bottom-6 left-6 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-messo-500 text-4xl capitalize text-white sm:left-4 sm:h-32 sm:w-32 sm:text-5xl">
              {imgLink ? (
                <Image
                  src={imgLink}
                  alt={fname + "dummy dp"}
                  height={150}
                  width={150}
                  className="absolute left-0 top-0 z-10 h-full w-full rounded-full "
                />
              ) : null}

              <div className="invisible absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-full bg-messo-800/80 hover:visible group-hover:visible">
                <TbEdit />
              </div>
              {fname[0]}
            </div>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit your profile</DialogTitle>
              <DialogDescription className="pt-1">
                Don&apos;t use the picture of your dog unless you want to be
                considered as a dog by our system.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit}>
              <div className="mb-8 mt-3 grid items-center gap-5">
                <div
                  className="group relative mx-auto flex h-40 w-40 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-messo-500 text-4xl capitalize text-white sm:text-5xl"
                  onClick={() => fileRef.current?.click()}
                >
                  {imgLink ? (
                    <Image
                      src={imgLink}
                      height={160}
                      width={160}
                      alt={fname + "dummy dp"}
                      className="absolute left-0 top-0 z-10 h-full w-full rounded-full "
                    />
                  ) : null}

                  <div className="invisible absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-full bg-messo-800/70 hover:visible group-hover:visible">
                    <BsCloudUpload className="text-white" />
                  </div>
                  {fname[0]}
                </div>
                <p className="text-center text-gray-500">
                  (Click on the photo to upload)
                </p>
                <input
                  onChange={(e) => {
                    if (e.target.files) {
                      const file = e.target.files[0];
                      const link = URL.createObjectURL(file);
                      setImgLink(link);
                    }
                  }}
                  ref={fileRef}
                  className="hidden"
                  type="file"
                  name="img"
                  id="img"
                />
                <div className="grid grid-cols-2 gap-5">
                  <InputField
                    name="fname"
                    label="First Name"
                    placeholder="Your first name"
                    defaultValue={fname}
                    type="text"
                  />
                  <InputField
                    name="lname"
                    label="Last Name"
                    placeholder="Your last name"
                    defaultValue={lname}
                    type="text"
                  />
                </div>
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

        <div className="absolute left-28 top-3 sm:left-40 sm:top-4">
          {/* Name */}
          <h2 className="text-md flex items-center gap-3 font-bold text-messo-900 sm:text-2xl">
            <span>{fname + " " + lname}</span>{" "}
            <TbEdit
              onClick={handleDialogOpen}
              className="hidden cursor-pointer text-messo-900/50 hover:text-messo-900 sm:inline-block"
            />
          </h2>

          {/* Email */}
          <p className="hidden pt-px text-sm text-gray-500 sm:block sm:text-base">
            {email}
          </p>
          {/* For small screen */}
          <p className="block pt-px text-sm text-gray-500 sm:hidden sm:text-base">
            User
          </p>
        </div>
      </div>
    </div>
  );
}
