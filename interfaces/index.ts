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
  time_duration: string;
  time: string;
  image: string;
  description_job: string;
  requirements: requirements;
  benefit: string;
  company: enterprise[];
  time_posted: TimePosted;
  available: boolean;
}
