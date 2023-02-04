import { ImageSourcePropType } from "react-native";

export interface recent_jobs {
  name_company: string;
  location: string;
  job: string;
  work_period: string;
  salary: number | string;
  image: ImageSourcePropType | string;
}
export interface User {
  id: number;
  name: string;
  image: string | ImageSourcePropType;
}

interface requirements {
  items: {
    level: string;
    knowledge: string;
    programing_language: string;
  };
}

interface TimePosted {
  time: {
    created_at: number | string;
    endAt: number | string;
  };
}

interface enterprise {
  enterprise: string;
  image: string;
  location: string;
  company_description: string;
}

export interface Job {
  position: string;
  salary: string;
  work_period: string;
  time: string;
  image: ImageSourcePropType | string;
  description_job: string;
  requirements: requirements;
  benefit: string;
  company: enterprise[];
  time_posted: TimePosted;
  available: boolean;
}
