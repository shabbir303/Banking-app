// src/lib/server/appwrite.js
import { Client, Account, Databases, Users } from 'node-appwrite';
// import { APPWRITE_KEY } from '$env/static/private';
// import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT } from '$env/static/public';
import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'appwrite-session';

export function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
        .setKey(process.env.APPWRITE_SECRET!); // Set the Appwrite API key!

    // Return the services we want to use.
    return {
        get account() {
            return new Account(client);
        }
    };
}

export function createSessionClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    // Extract our custom domain's session cookie from the request
    const session = cookies().get(SESSION_COOKIE);
    if (!session || !session.value) {
        throw new Error("No user session");
    }

    client.setSession(session.value);

    // Return the services we want to use.
    return {
        get account() {
            return new Account(client);
        },
        get database(){
            return new Databases(client);
        },
        get user(){
            return new Users(client);
        },
    };
}
