/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anurag's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anurag Jha Portfolio",
    type: "website",
    url: "https://anuragkj.github.io",
  },
};

//Home Page
const greeting = {
  title: "Anurag Kumar Jha",
  logo_name: "AnuragKumarJha",
  nickname: "anuragkj",
  subTitle:
    "An undergraduate student with a passion for technology, innovation and learning. I have worked on multiple industry projects before and wish to work on projects and ideas that refine the world that we live in. I want to utilize my education for enriching the lives of everyone around me.",
  resumeLink:
    "https://resume.io/r/H5GWWpKMg",
  portfolio_repository: "https://github.com/anuragkj/masterPortfolio",
  githubProfile: "https://github.com/anuragkj",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/anuragkj",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anurag-kumar-jha-680419204/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:anurag.jha.in@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/anurag.jha30/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Bootstrap, Tailwind",
        "⚡ Developing mobile applications using Flutter Flow",
        "⚡ Creating application backend in Flask, Django, Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django", 
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask", 
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "NextJS", 
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Exploratory data analysis and visualization using Python",
        "⚡ Developing models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing user interface for mobile and web applications",
        "⚡ Creating designs for posters",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/anuragkj30/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/f20200128",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/anuragkj",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/anuragkumarjha",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Delhi Public School Ranchi",
      subtitle: "Higher School Certificate",
      logo_path: "dps_ranchi.png",
      alt_name: "DPS Ranchi",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Obtained 98.4% in the CBSE Boards examination.",
        "⚡ Awarded medal for getting top 3 in State.",
        
      ],
      website_link: "https://www.dpsranchi.com/",
    },
    {
      title: "BITS Pilani Dubai",
      subtitle: "B.E. - Computer Science",
      logo_path: "bits_logo.webp",
      alt_name: "BITS Dubai",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have recieved a CGPA of 10/10 and recieved of academic excellence awards for academic performance",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Cryptography, Neural Networks, Data Mining.",
      ],
      website_link: "https://www.bits-pilani.ac.in/dubai/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Android Development",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-973be3a8-1126-487a-84bf-cff11da589f3/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Computer Vision and Deep Learning",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6acc187d-3669-4005-8ad3-7535d7073725/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Workspace Essentials",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Intro to ML: Image Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Intro to ML: Language Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Intermediate ML: TensorFlow on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Blockchain A-Z",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6b89eb95-23f0-40f4-9212-9683f76aeb8b/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Ethereum and Solidity",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a845aeae-30b1-493e-9ee1-2e516cdefbca/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Computing on AWS",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5c45557b-3a1e-420f-be9b-1eb7b81e8a8a/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as an intern in multiple companies on works related to Full Stack Development, Data Science and Artificial Intelligence",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI and Web Developer",
          company: "Trajectories Business Solutions Private Limited",
          company_url: "https://www.linkedin.com/company/trajectories-business-solutions-private-limited/",
          logo_path: "trajectorie_logo.png",
          duration: "June 2023 - Currently",
          location: "Dubai, UAE",
          description:
            "I developed a comprehensive LLM AI solution utilizing GPT-3.5 Turbo to replace call center trainers, enabling the analysis of responses, scoring, providing feedback, and suggestions. This full-stack solution was built using Streamlit and MySQL, enhancing the training process for call center agents.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Practice School",
          company: "Bahwan Cybertek",
          company_url: "https://www.linkedin.com/company/bctglobal/",
          logo_path: "bahwan_logo.png",
          duration: "June 2022 - Aug 2022",
          location: "Dubai, UAE",
          description:
            "I was responsible for both solution architecture and full-stack development of a patient journey system using FlutFlow and Firebase. Additionally, I successfully created and hosted a RASA-based chatbot for a university while also conducting research on the development of a fraud detection system for a local supermarket chain.",
          color: "#000000",
        },
        {
          title: "Software and Web Development Intern",
          company: "fibrisTerre",
          company_url:
            "https://www.linkedin.com/company/fibristerre//",
          logo_path: "fibristerre_logo.jpeg",
          duration: "Multiple Durations",
          location: "Germany (Remote)",
          description:
            "As a Software and Web Development Intern, I contributed to the creation of an optical fiber-based structural health monitoring system. My responsibilities included assisting in the development of a real-time Structural Health Monitoring and Alarm system. I worked on the front-end using React and the back-end with Flask and Django. Furthermore, I applied an AI forecasting model, ARIMA, to predict alarms in advance, enhancing the system's functionality.",
          color: "#0071C5",
        },
        {
          title: "Data Science Trainee",
          company: "ORE2METAL, Canada",
          company_url: "https://ore2metal.ca//",
          logo_path: "ore_logo.png",
          duration: "June 2021 - Oct 2021",
          location: "Canada (Remote)",
          description:
            "Worked as a Data Science and ML intern for building a smart manufacturing solution using IoT and ML techniques.",
          color: "#ee3c26",
        },
        {
          title: "Summer Intern",
          company: "Motion Signal Technologies, UK",
          company_url:
            "https://motionsignaltechnologies.com/",
          logo_path: "motion_logo.png",
          duration: "June 2021 - September 2018",
          location: "United Kingdom (Remote)",
          description:
            "During my internship with a Smart Acoustic Monitoring system, I focused on data engineering tasks. This involved working extensively with hdf5 files in Python and implementing various data preprocessing techniques to ensure data cleanliness. Additionally, I utilized the numpy module for effective dataset manipulation and management.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Student Clubs Mentor",
          company: "Google DSC",
          company_url: "https://gdsc.community.dev/bits-pilani-dubai/",
          logo_path: "gdsc_logo.png",
          duration: "July 2023 - Current",
          location: "Dubai",
          description:
            "Founder and former Student Lead at Google Developer Student Club for BITS Pilani Dubai Campus. Set up team to organise workshops, talks, events and establish the club at the University.",
          color: "#D83B01",
        },
        {
          title: "ACM Co Chair",
          company: "ACM",
          company_url: "https://www.acmbpdc.org/",
          logo_path: "acm_logo.png",
          duration: "June 2022 - Current",
          location: "Dubai",
          description:
            "My responsibility for this program was to create opensource environment in college apart from conducting technical events and competitions. We have organised multiple hackathons and competitions. We have build opensource community of our own college.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. These include full stack webapps, data science project, machine learning and deep learning models, AI applications and Blockchain projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research Work",
  description:
    "I have worked on few research papers and publications a few of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
