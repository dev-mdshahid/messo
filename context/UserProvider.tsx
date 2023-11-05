"use client";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserType = {
  _id: string;
  fname: string;
  lname: string;
  gender: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  joinedAt: string;
  img: string;
};

type DataType = { user: UserType; setUser: Dispatch<SetStateAction<UserType>> };

type UserProviderProps = {
  children: React.ReactNode;
};

const USER_CONTEXT = createContext<DataType>({
  user: {
    _id: "",
    fname: "",
    lname: "",
    gender: "",
    email: "",
    age: 0,
    height: 0,
    weight: 0,
    joinedAt: "",
    img: "",
  },
  setUser: (data: object) => {},
});

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({
    _id: "",
    fname: "",
    lname: "",
    gender: "",
    email: "",
    age: 0,
    height: 0,
    weight: 0,
    joinedAt: "",
    img: "",
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

  const data: DataType = { user, setUser };

  return <USER_CONTEXT.Provider value={data}>{children}</USER_CONTEXT.Provider>;
}

export const useGetUser = () => {
  const data = useContext(USER_CONTEXT);
  return data;
};
