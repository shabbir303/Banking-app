"user server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";

export const signIn =async()=>{

  try{

  }
  catch(error){
    console.log("Error", error);
  }
}

export const signUp =async(userData: SignUpParams)=>{
  const {email, firstName, lastName, password} = userData;
  try{
     const {account} = await createAdminClient();
     const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
     );

     const session = await account. createEmailPasswordSession
  }
  catch(error){
    console.log("Error", error);
  }
}

export const loggedInUser = async()=>{
  try{
     const {account} = createSessionClient();
     return await account.get();
  }
  catch(error){
    return null;
  }
}