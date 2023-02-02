import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Job } from "../interfaces";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  "Job-detail": { job: Job };
  Notifications: undefined;
  Settings: undefined;
  Root: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
