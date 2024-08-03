"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "../../../lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";



const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Define your form.

  const formSchema = authFormSchema(type)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit= async(data: z.infer<typeof formSchema>) =>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
     setLoading(true);
      try{
        // sign up with appwrite and create a plaid token
        if(type === "sign-up"){
          const userData = {
            firtName : data.firstName,
          }
        }
        if(type === "sign-in"){

        }
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
  }

  return (
    <section className="auth-form  pb-[20px]">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="mb-5 cursor-pointer items-center gap-2 flex">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif text-black-2 font-bold ">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link account" : type === "sign-in" ? "Sign in" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* plaidLink */}</div>
      ) : (
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              {type === "sign-up" && (
                 <>
                 <div className="flex items-center gap-4">
                 <CustomInput
                 control={form.control}
                 name="firstName"
                 label = "First Name"
                 placeholder="Enter your firstName"
                />
                   <CustomInput
                 control={form.control}
                 name="lastName"
                 label = "Last Name"
                 placeholder="Enter your lastName"
                />
                 </div>
                <CustomInput
                 control={form.control}
                 name="address1"
                 label = "Address"
                 placeholder="Specific Address"
                />
                <CustomInput
                 control={form.control}
                 name="city"
                 label = "City"
                 placeholder=""
                />
               <div className="flex items-center gap-4">
               <CustomInput
                 control={form.control}
                 name="state"
                 label = "State"
                 placeholder="ex: NY"
                />
                <CustomInput
                 control={form.control}
                 name="postalCode"
                 label = "Postal Code"
                 placeholder="ex: 11101"
                />
               </div>
               <div className="flex items-center gap-4">
               <CustomInput
                 control={form.control}
                 name="dateOfBirth"
                 label = "Date Of Birth"
                 placeholder="yyyy-mm-dd"
                />
                <CustomInput
                 control={form.control}
                 name="ssn"
                 label = "SSN"
                 placeholder="ex: 1234"
                />
               </div>
                <CustomInput
                 control={form.control}
                 name="email"
                 label = "Email"
                 placeholder="Enter your email"
                />
  
                <CustomInput
                 control={form.control}
                 name="password"
                 label = "Password"
                 placeholder="Enter your password"
                 
                />
                 </>
              )}

              {type=== "sign-in" && (
                <>
                  <CustomInput
               control={form.control}
               name="email"
               label = "Email"
               placeholder="Enter your email"
              />

              <CustomInput
               control={form.control}
               name="password"
               label = "Password"
               placeholder="Enter your password"
               
              />
                </>
              )}
              
              <div className="flex flex-col gap-4">
              <Button type="submit" disabled = {loading}
               className = "form-btn"
              >{ loading ?( <>
              <Loader2 
              size={20}
              className="animate-spin"
              /> &nbsp; Loading...
              </>): type === "sign-in"? "Sign Up": "Sign In" }</Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1 mt-3">
            <p className="text-14 font-normal text-gray-600">
                {type === "sign-in" ?"Don't have an account?":"Already have an account?"}
            </p>
                 <Link href={type=== "sign-in"? "/sign-up":"/sign-in"} className="form-link">
                   {type === "sign-in"? "Sign Up": "Sign In"}
                 </Link> 
          </footer>
        </div>
      )}
    </section>
  );
};

export default AuthForm;
