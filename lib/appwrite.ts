import { Client, Avatars, Account, OAuthProvider } from "react-native-appwrite";
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
    platform: "com.zeiro.apps.zm",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    agentsCollectionID: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID
}

export const client = new Client()
client.setEndpoint(config.endpoint!)
client.setProject(config.projectId!)
client.setPlatform(config.platform!);



export const avatar = new Avatars(client);
export const account = new Account(client);


export async function login() {
    try {
        const redirectURi = Linking.createURL("/");
        const response = account.createOAuth2Token(OAuthProvider.Google, redirectURi);

        if (!response) {
            throw new Error("Failed to login");
        }

        const browser = await openAuthSessionAsync(response.href, redirectURi);

        if (browser.type !== "success") {
            throw new Error("Could not open browser");
        }

        const url = new URL(browser.url);

        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();

        if (!secret || !userId) throw new Error("Create OAuth2 token failed");


        const session = await account.createSession(userId, secret);
        if (!session) throw new Error("Failed to create session");

        return true;


    } catch (error) {
        console.error(error);
        return false;
    }
}


export async function logout() {
    try {
        await account.deleteSession("current");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


export async function getUser() {
    try {
        const response = await account.get();
        if (response.$id) {
            const userAvatar = await avatar.getInitials(response.name);

            return {
                ...response,
                avatar: userAvatar
            }
        }
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}