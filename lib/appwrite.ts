import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: process.env.EXPO_PUBLIC_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_DATABASE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_USER_COLLECTION_ID,
  videoCollectionId: process.env.EXPO_PUBLIC_VIDEO_COLLECTION_ID,
  storageId: process.env.EXPO_PUBLIC_STORAGE_ID,
};

interface signUp {
  email: string;
  password: string;
  username: string;
}

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint as string)
  .setProject(appwriteConfig.projectId as string)
  .setPlatform(appwriteConfig.platform as string);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

const signIn = async (email: string, password: string) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error as string);
    }
  };

export const createUser = async ( email:string, password:string, username:string ) => {
  try {
    const newAccount = account.create(ID.unique(), email, password);
    if (!newAccount) {
      throw Error("Problem occured with sign up");
    }
    console.log(newAccount);
    
    const avatarUrl = avatars.getInitials(username);
    if(await newAccount){
        await signIn(email, password);
    }

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId as string,
      appwriteConfig.userCollectionId as string,
      ID.unique(),
      {
        accountId: (await newAccount).$id,
        email,
        username,
        avatar: avatarUrl
      }
    );
    return newUser;
  } catch (error) {
    throw new Error(error as string);
  }
};


