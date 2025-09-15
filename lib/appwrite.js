import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
  .setProject("68c828b100059cbf906a")
  .setPlatform("dev.pupkin.app");

export const account = new Account(client);
export const avatars = new Avatars(client);
