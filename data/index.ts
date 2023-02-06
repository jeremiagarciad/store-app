import { Job, User, recent_jobs } from "../interfaces";

export const user: User = {
  id: 0,
  name: "John Doe",
  image: require("../assets/images/avatar.png"),
};

export const recent_job_posted: recent_jobs[] = [
  {
    id: 0,
    name_company: "Slack",
    location: "California",
    job: "Senior UX/UI Designer",
    work_period: "Full-time",
    salary: "$50K - $80K",
    image: require("../assets/icons-company/slack.png"),
  },
  {
    id: 1,
    name_company: "Microsoft",
    location: "Washington",
    job: "Software Engineer",
    work_period: "Full-time",
    salary: "$90K - $120K",
    image: require("../assets/icons-company/microsoft.png"),
  },
  {
    id: 2,
    name_company: "Google",
    location: "California",
    job: "Software Developer",
    work_period: "Full-time",
    salary: "$90K - $120K",
    image: require("../assets/icons-company/google.png"),
  },
  {
    id: 3,
    name_company: "Apple",
    location: "California",
    job: "Software Engineer",
    work_period: "Full-time",
    salary: "$90K - $120K",
    image: require("../assets/icons-company/apple.png"),
  },
  {
    id: 4,
    name_company: "Nike",
    location: "Oregon",
    job: "Product Designer",
    work_period: "Full-time",
    salary: "$50K - $80K",
    image: require("../assets/icons-company/nike.png"),
  },
];

export const Jobs: Job[] = [
  {
    position: "Frontend Developer",
    salary: "$75K - $110K",
    work_period: "Full-time",
    time: "2 months",
    image: require("../assets/icons-company/google.png"),
    description_job:
      "Google is looking for an experienced and talented Frontend Developer to join our team. The ideal candidate will have a passion for creating high-quality user experiences.",
    requirements: {
      items: {
        level:
          "At Google, frontend developers are expected to have a deep understanding of HTML, CSS, and JavaScript, as well as a good understanding of DOM manipulation, AJAX and other web technologies. They should also be familiar with cross-browser compatibility issues, accessibility standards.",
        knowledge:
          "The Frontend Developer will be responsible for developing user interfaces for Google products and services. This includes creating HTML, CSS, and JavaScript code to create a seamless user experience. The Frontend Developer must also be able to troubleshoot and debug any issues with existing code.",
        programing_language: "React",
      },
    },
    benefit: "Free meals and gym membership",
    company: {
      enterprise: "Google",
      image: require("../assets/icons-company/google.png"),
      location: "California",
      company_description:
        "Google is an American multinational technology company specializing in Internet-related services and products",
    },
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
    salary: "$65K - $100K",
    work_period: "Full-time",
    time: "3 months",
    image: require("../assets/icons-company/amazon.png"),
    description_job:
      "As a Backend Developer at Amazon, you will be responsible for designing, developing, testing, and deploying software solutions to improve customer experience. You will work closely with other developers, product managers, and other stakeholders to create robust and scalable software solutions.",
    requirements: {
      items: {
        level:
          "Writing unit and integration tests to ensure code quality and scalability, Working in an Agile/Scrum development environment to ensure timely delivery of software solutions, Collaborating with teams to develop innovative solutions to customer experience problems Troubleshooting and resolving technical issues, Participating in code reviews to ensure code quality and consistency",
        knowledge:
          "Designing, developing, and deploying quality solutions that are scalable and secure Developing and maintaining application software solutions using various languages like Java, C#, Python, and others",
        programing_language: "Express",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: {
      enterprise: "Amazon",
      image: require("../assets/icons-company/amazon.png"),
      location: "Seattle, WA",
      company_description:
        "Amazon is an American multinational technology company specializing in e-commerce, cloud computing, digital streaming, and artificial intelligence",
    },

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
    salary: "$80K - $120K",
    work_period: "Part-time",
    time: "4 months",
    image: require("../assets/icons-company/facebook.png"),
    description_job: "This job is for a data scientist",
    requirements: {
      items: {
        level: "High",
        knowledge: "Python, Machine Learning",
        programing_language: "Numpy",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: {
      enterprise: "Facebook",

      image: require("../assets/icons-company/facebook.png"),
      location: "Menlo Park, CA",
      company_description:
        "Facebook is an American online social media and social networking service company",
    },

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
    salary: "$90K - $120K",
    work_period: "Full-time",
    time: "3 months",
    image: require("../assets/icons-company/netflix.png"),
    description_job: "This job is for a software engineer",
    requirements: {
      items: {
        level: "High",
        knowledge: "C++, Java",
        programing_language: "Python",
      },
    },
    benefit: "Free meals and gym membership",
    company: {
      enterprise: "Netflix",
      image: require("../assets/icons-company/netflix.png"),
      location: "Los Gatos, CA",
      company_description:
        "Netflix, Inc. is an American over-the-top content platform and production company",
    },

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
    salary: "$60K - $80K",
    work_period: "Full-time",
    time: "3 months",
    image: require("../assets/icons-company/airbnb.png"),
    description_job: "This job is for a UX designer",
    requirements: {
      items: {
        level: "Medium",
        knowledge: "Graphic Design, User Research",
        programing_language: "Adobe XD",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: {
      enterprise: "Airbnb",
      image: require("../assets/icons-company/airbnb.png"),
      location: "San Francisco, CA",
      company_description:
        "Airbnb is an American vacation rental online marketplace company",
    },

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
    salary: "$60K - $90K",
    work_period: "Full-time",
    time: "3 months",
    image: require("../assets/icons-company/uber.png"),
    description_job: "This job is for a QA engineer",
    requirements: {
      items: {
        level: "High",
        knowledge: "Testing, Automation",
        programing_language: "JavaScript",
      },
    },
    benefit: "Free meals and gym membership",
    company: {
      enterprise: "Uber",
      image: require("../assets/icons-company/uber.png"),
      location: "San Francisco, CA",
      company_description:
        "Uber Technologies, Inc. is an American multinational ride-hailing company",
    },

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
    salary: "$70K - $95K",
    work_period: "Full-time",
    time: "4 months",
    image: require("../assets/icons-company/dropbox.png"),
    description_job: "This job is for a product manager",
    requirements: {
      items: {
        level: "High",
        knowledge: "Product Strategy, Business Analysis",
        programing_language: "none",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: {
      enterprise: "Dropbox",
      image: require("../assets/icons-company/dropbox.png"),
      location: "San Francisco, CA",
      company_description: "Dropbox is an American file hosting service",
    },

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
    salary: "$50K - $70K",
    work_period: "Full-time",
    time: "2 months",
    image: require("../assets/icons-company/microsoft.png"),
    description_job: "This profile is for a UX/UI Designer",
    requirements: {
      items: {
        level: "Medium",
        knowledge: "Adobe Creative Suite, HTML/CSS",
        programing_language: "Figma",
      },
    },
    benefit: "Free meals and gym membership",
    company: {
      enterprise: "Microsoft",
      image: require("../assets/icons-company/microsoft.png"),
      location: "Redmond, WA",
      company_description:
        "Microsoft is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers.",
    },

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
    salary: "$90K -$120K",
    work_period: "Full-time",
    time: "3 months",
    image: require("../assets/icons-company/apple.png"),
    description_job: "This profile is for a Senior UX/UI Designer",
    requirements: {
      items: {
        level: "High",
        knowledge: "Adobe Creative Suite, HTML/CSS",
        programing_language: "Sketch",
      },
    },
    benefit: "Free meals and Health Insurance",
    company: {
      enterprise: "Apple",
      image: require("../assets/icons-company/apple.png"),
      location: "Cupertino, CA",
      company_description:
        "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
    },

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
    salary: "$70K - $90K",
    work_period: "Full-time",
    time: "4 months",
    image: require("../assets/icons-company/twitter.png"),
    description_job: "This profile is for a Lead UX Designer",
    requirements: {
      items: {
        level: "High",
        knowledge: "Adobe Creative Suite, HTML/CSS",
        programing_language: "InVision",
      },
    },
    benefit: "Free meals and Retirement Plan",
    company: {
      enterprise: "Twitter",
      image: require("../assets/icons-company/twitter.png"),
      location: "San Francisco, CA",
      company_description:
        'Twitter is an American microblogging and social networking service on which users post and interact with messages known as "tweets".',
    },

    time_posted: {
      time: {
        created_at: 1,
        endAt: 2,
      },
    },
    available: true,
  },
];
