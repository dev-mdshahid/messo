"use client";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

type UserType = {
  _id: string;
  fname: string;
  lname: string;
  gender: string;
  email: string;
  age: number;
  height: number;
  weight: number;
};

const USER_CONTEXT = createContext({
  _id: "",
  fname: "",
  lname: "",
  gender: "",
  email: "",
  age: 0,
  height: 0,
  weight: 0,
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>({
    _id: "",
    fname: "",
    lname: "",
    gender: "",
    email: "",
    age: 0,
    height: 0,
    weight: 0,
  });
  const session = useSession();
  const email = session.data?.user?.email;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/get-user?email=${email}`,
        );
        const data = await response.json();

        if (data.ok) {
          setUser(data.data);
        } else {
          toast({
            variant: "destructive",
            title: data.message,
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Something terrible happened while fetching user data",
        });
      }
    };
    getUser();
  }, [email]);

  return <USER_CONTEXT.Provider value={user}>{children}</USER_CONTEXT.Provider>;
}

export const useGetUser = (): UserType => {
  const user = useContext(USER_CONTEXT);
  return user;
};
