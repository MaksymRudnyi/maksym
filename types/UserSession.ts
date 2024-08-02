import { UserProfile } from "@/types/UserProfile";
import { Session } from "@auth0/nextjs-auth0";

export interface UserSession extends Session {
  user: UserProfile;
}
