/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aniket's Portfolio",
  description:
    "DevOps Engineer and passionate learner who pairs hands-on Linux and containerization with cloud infrastructure to build reliable, cost-aware environments, streamline CI/CD pipelines, and implement end-to-end monitoring and observability for faster detection and recovery. Additionally, designs system architectures with high availability by incorporating redundancy, load balancing, and automated failover to minimize downtime and avoid single points of failure.",
  og: {
    title: "Aniket Kumar Portfolio",
    type: "website",
    url: "https://crypticani.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Aniket Kumar",
  logo_name: "crypticani",
  nickname: "crypticani",
  subTitle:
    "DevOps Engineer and passionate learner who pairs hands-on Linux and containerization with cloud infrastructure to build reliable, cost-aware environments, streamline CI/CD pipelines, and implement end-to-end monitoring and observability for faster detection and recovery, designs system architectures with high availability.",
  resumeLink:
    "https://crypticani.github.io/files/Aniket_Kumar_Resume_DevOps.pdf",
  portfolio_repository: "https://github.com/crypticani/portfolio",
  githubProfile: "https://github.com/crypticani",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Aniket1919",
  // linkedin: "https://www.linkedin.com/in/Aniket-Kumar-88710b138/",
  // gmail: "AniketKumar98@gmail.com",
  // gitlab: "https://gitlab.com/AniketKumar98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Aniket_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/crypticani",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/crypticani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Email",
    link: "mailto:crypticani@protonmail.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/envelope?style=brands
    backgroundColor: "#bd20e4ff", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@knowledgewit",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/crypticani",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_crypticani/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "DevOps and Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working and managing multiple cloud platforms",
        "⚡ Deployment of applications using Docker on production infrastructure as well as on premise at client's data center and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Configuration of Database clusters for High Availability from scratch (MySQL, PostgreSQL, MongoDB, Typesense, Clickhouse, Redis, KeyDB) and their backup and restore methodologies",
        "⚡ Configuring and Managing Single Sign On for various applications",
        "⚡ Designing System Architecture of the applications for High Availability",
        "⚡ Configuration of CI/CD using Jenkins from scratch",
        "⚡ Configuring monitoring infrastructure from scratch using Prometheus, Alertmanager, Garafana, Loki and Fluentbit",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#00060fff",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#3e33a3ff",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#be4444ff",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#252524ff",
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
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#e02007ff",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#c64c14ff",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#0a741bff",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#0d0553ff",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#c64c14ff",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React/Angular",
        "⚡ Developing fullstack web applications using Django.",
        "⚡ Creating application backend in Node, Express, Flask and Django Rest Framework",
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
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#CC6699",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "#f5eaeaff",
            color: "#033d16ff",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Master in Computer Applications",
      logo_path: "lpu.jpeg",
      alt_name: "LPU",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have studied computer applications subjects like Programming, DS, Algorithms, DBMS, OS, Cloud, etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Got 8.97 CGPA",
      ],
      website_link: "https://lpu.in",
    },
    {
      title: "Dev Sanskriti Vishwavidyalaya",
      subtitle: "Bachelor in Computer Applications",
      logo_path: "dsvv.jpg",
      alt_name: "DSVV",
      duration: "2028 - 2021",
      descriptions: [
        "⚡ I have studied computer applications subjects like Programming, DS, Algorithms, DBMS, OS, Cloud, etc.",
        "⚡ Apart from this, I have also done a modular course in Cloud Computing",
        "⚡ During my time at university, I was also associated with Jigyasa Club.",
        "⚡ I also got the Academic Excellence Award and got 8.0 CGPA",
      ],
      website_link: "https://www.dsvv.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      subtitle: "- Oracle",
      logo_path: "oracle.png",
      certificate_link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E58B96E195BB05FB979AE79B82FD8C3FCC52498BFB6954F2079D0A4C9BC39560",
      alt_name: "Oracle",
      color_code: "#810f0fff",
    },
    {
      title: "Foundations of Project Management",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/E3TXTAKY7L33",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.skills.google/public_profiles/8f5c39be-dc33-4dcf-9222-93a12d66603f",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/E5UEZVFGNJLC",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Google IT Automation with Python Specialization",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XKHXNF4UDCEC",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Penetration Testing and Ethical Hacking",
      subtitle: "- Cybrary",
      logo_path: "cybrary.jpg",
      certificate_link:
        "https://app.cybrary.it/courses/api/certificate/CC-0ba8e1bf-7007-486c-bd2b-40533d96e8f1/view",
      alt_name: "Cybrary",
      color_code: "#0d0d0e99",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I began my career as a Full‑Stack Developer working with Python, Django, and Vue.js, and later transitioned into a DevOps Engineer, driven by a strong interest in Linux, cloud platforms, and infrastructure automation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "DevOps Engineer",
          company: "Kochar Innovations Private Limited",
          company_url: "https://www.linkedin.com/company/knowmax/about/",
          logo_path: "kochartech-small.jpg",
          duration: "June 2023 - Current",
          location: "Amritsar, Punjab",
          description:
            "Deployment of applications using Docker on production infrastructure as well as on premise at client's data center. Configuration of Database clusters for High Availability from scratch (MySQL, PostgreSQL, MongoDB, Typesense, Clickhouse, Redis, KeyDB) and their backup and restore methodologies. Deployed Keycloak in High Availability mode from scratch and Integrated SSO for various applications. Managing Cloud Infrastructure. Leading the DevOps team and helping them in solving their problems whenever required. Designing System Architecture of the applications for High Availability. Configuration of CI/CD using Jenkins from scratch",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Intern",
          company: "Kochar Infotech Ltd.",
          company_url: "https://www.kochartech.com/",
          logo_path: "kochartech-small.jpg",
          duration: "June 2022 - May 2023",
          location: "Gurgaon, Haryana",
          description:
            "Configured monitoring infrastructure for the organization from scratch using Prometheus, Alertmanager, Garafana, Loki and Fluentbit. Streamlined the deployment process of applications by dockerizing them. Customized Linux distro for organizational needs. Tracked Linux users with the help of Python and MQTT protocol. Configured auto data backup of all the Linux users to S3 buckets. Developed an admin panel to track all the active devices, fetch backup data and system logs, access the active systems remotely using Python, Django and MQTT",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Development Intern",
          company: "The Code Work",
          company_url: "https://thecodework.com",
          logo_path: "thecodework.png",
          duration: "June 2021 - Oct 2021",
          description:
            " Working on Django, Django Rest Framework, TailwindCSS and VueJS. Developing a No-Code Project in Django and Django Rest Framework. ",
          color: "#9b1578",
        },
        {
          title: "Software Development Intern",
          company: "All World Gayatri Pariwar",
          company_url: "https://awgp.org",
          logo_path: "awgp.png",
          duration: "Feb 2021 - May 2021",
          description:
            "Collaborated effectively with members of software development team to fix the bugs or add some new features in existing softwares as well as contributed in the development of the new ERP for the organization and wrote the documentation.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          organization: "Fedora",
          company_url: "https://fedoraproject.org",
          logo_path: "fedora.png",
          duration: "July 2020 - June 2021",
          description: "Contributor at Fedora Community Outreach Task Force",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Linux, Python. DevOps, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://crypticani.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
