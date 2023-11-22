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
  dietPlans: string[];
  exercisePlans: string[];
};

type FetchStatusType = "loading" | "success" | "error";

type DataType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
  fetchStatus: FetchStatusType;
};

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
    dietPlans: [""],
    exercisePlans: [""],
  },
  setUser: (data: object) => {},
  fetchStatus: "loading",
});

export default function UserProvider({ children }: UserProviderProps) {
  const [fetchStatus, setFetchStatus] = useState<FetchStatusType>("loading");
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
    dietPlans: [""],
    exercisePlans: [""],
  });
  const session = useSession();
  const email = session.data?.user?.email;

  useEffect(() => {
    const getUser = async () => {
      setFetchStatus("loading");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/get-user?email=${email}`,
        );
        const data = await response.json();

        if (data.ok) {
          setUser(data.data);
          setFetchStatus("success");
        } else {
          setFetchStatus("error");
          toast({
            variant: "destructive",
            title: data.message,
          });
        }
      } catch (error) {
        setFetchStatus("error");
        toast({
          variant: "destructive",
          description: "Something terrible happened while fetching user data",
        });
      }
    };
    getUser();
  }, [email]);

  const data: DataType = { user, setUser, fetchStatus };

  return <USER_CONTEXT.Provider value={data}>{children}</USER_CONTEXT.Provider>;
}

export const useGetUser = () => {
  const data = useContext(USER_CONTEXT);
  return data;
};
