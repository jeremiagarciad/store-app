import { Job, User, recent_jobs } from "../interfaces";

export const user: User = {
  id: 0,
  name: "John Doe",
  image: require("../assets/images/avatar.png"),
};

export const recent_job_posted: recent_jobs[] = [
  {
    name_company: "Slack",
    location: "California",
    job: "Senior UX/UI Designer",
    work_period: "Full-time",
    salary: "$50K - $80K",
    image: "",
  },
];

export const Jobs: Job[] = [
  {
    position: "Frontend Developer",
    salary: "$500",
    work_period: "Full-time",
    time: "2 months",
    image: "image.png",
    description_job: "This job is for a frontend developer",
    requirements: {
      items: {
        level: "Medium",
        knowledge: "JavaScript, HTML/CSS",
        programing_language: "React",
      },
    },
    benefit: "Free meals and gym membership",
    company: [
      {
        enterprise: "Google",
        image: "google.jpg",
        location: "Mountain View, CA",
        company_description:
          "Google is an American multinational technology company specializing in Internet-related services and products",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "Backend Developer",
    salary: "$600",
    work_period: "Full-time",
    time: "3 months",
    image: "image.png",
    description_job: "This job is for a backend developer",
    requirements: {
      items: {
        level: "High",
        knowledge: "JavaScript, Node.js",
        programing_language: "Express",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: [
      {
        enterprise: "Amazon",
        image: "amazon.jpg",
        location: "Seattle, WA",
        company_description:
          "Amazon is an American multinational technology company specializing in e-commerce, cloud computing, digital streaming, and artificial intelligence",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: false,
  },
  {
    position: "Data Scientist",
    salary: "$800",
    work_period: "Full-time",
    time: "4 months",
    image: "image.png",
    description_job: "This job is for a data scientist",
    requirements: {
      items: {
        level: "High",
        knowledge: "Python, Machine Learning",
        programing_language: "Numpy",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: [
      {
        enterprise: "Facebook",
        image: "facebook.jpg",
        location: "Menlo Park, CA",
        company_description:
          "Facebook is an American online social media and social networking service company",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "Software Engineer",
    salary: "$700",
    work_period: "Full-time",
    time: "3 months",
    image: "image.png",
    description_job: "This job is for a software engineer",
    requirements: {
      items: {
        level: "High",
        knowledge: "C++, Java",
        programing_language: "Python",
      },
    },
    benefit: "Free meals and gym membership",
    company: [
      {
        enterprise: "Netflix",
        image: "netflix.jpg",
        location: "Los Gatos, CA",
        company_description:
          "Netflix, Inc. is an American over-the-top content platform and production company",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "UX Designer",
    salary: "$600",
    work_period: "Full-time",
    time: "3 months",
    image: "image.png",
    description_job: "This job is for a UX designer",
    requirements: {
      items: {
        level: "Medium",
        knowledge: "Graphic Design, User Research",
        programing_language: "Adobe XD",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: [
      {
        enterprise: "Airbnb",
        image: "airbnb.jpg",
        location: "San Francisco, CA",
        company_description:
          "Airbnb is an American vacation rental online marketplace company",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "QA Engineer",
    salary: "$600",
    work_period: "Full-time",
    time: "3 months",
    image: "image.png",
    description_job: "This job is for a QA engineer",
    requirements: {
      items: {
        level: "High",
        knowledge: "Testing, Automation",
        programing_language: "JavaScript",
      },
    },
    benefit: "Free meals and gym membership",
    company: [
      {
        enterprise: "Uber",
        image: "uber.jpg",
        location: "San Francisco, CA",
        company_description:
          "Uber Technologies, Inc. is an American multinational ride-hailing company",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "Product Manager",
    salary: "$900",
    work_period: "Full-time",
    time: "4 months",
    image: "image.png",
    description_job: "This job is for a product manager",
    requirements: {
      items: {
        level: "High",
        knowledge: "Product Strategy, Business Analysis",
        programing_language: "none",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: [
      {
        enterprise: "Dropbox",
        image: "dropbox.jpg",
        location: "San Francisco, CA",
        company_description: "Dropbox is an American file hosting service",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "UX/UI Designer",
    salary: "$500",
    work_period: "Full-time",
    time: "2 months",
    image: "image.png",
    description_job: "This profile is for a UX/UI Designer",
    requirements: {
      items: {
        level: "Medium",
        knowledge: "Adobe Creative Suite, HTML/CSS",
        programing_language: "Figma",
      },
    },
    benefit: "Free meals and gym membership",
    company: [
      {
        enterprise: "Microsoft",
        image: "microsoft.jpg",
        location: "Redmond, WA",
        company_description:
          "Microsoft is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers.",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "Senior UX/UI Designer",
    salary: "$600",
    work_period: "Full-time",
    time: "3 months",
    image: "image.png",
    description_job: "This profile is for a Senior UX/UI Designer",
    requirements: {
      items: {
        level: "High",
        knowledge: "Adobe Creative Suite, HTML/CSS",
        programing_language: "Sketch",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: [
      {
        enterprise: "Apple",
        image: "apple.jpg",
        location: "Cupertino, CA",
        company_description:
          "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
  {
    position: "Lead UX Designer",
    salary: "$700",
    work_period: "Full-time",
    time: "4 months",
    image: "image.png",
    description_job: "This profile is for a Lead UX Designer",
    requirements: {
      items: {
        level: "High",
        knowledge: "Adobe Creative Suite, HTML/CSS",
        programing_language: "InVision",
      },
    },
    benefit: "Free meals and Retirement Plan",
    company: [
      {
        enterprise: "Twitter",
        image: "twitter.jpg",
        location: "San Francisco, CA",
        company_description:
          'Twitter is an American microblogging and social networking service on which users post and interact with messages known as "tweets".',
      },
    ],
    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
];
