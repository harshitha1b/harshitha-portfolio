/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harshitha Boggula",
  title: "Hi, I'm Harshitha 👋",
  subTitle: emoji(
    "Computer Science Engineering student passionate about Java, Data Structures & Algorithms, AI, and building innovative healthcare solutions like PharmaBridge AI 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YCa6xnPu7o4_C-_h9UtRp3ZLqyFjaUjN/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshitha1b",
  linkedin: "http://linkedin.com/in/harshitha-boggula-77a7322aa",
  gmail: "harshithaboggula9@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  // Leetcode: "https://leetcode.com/u/harshitha__b1/",
  // Codechef: "https://www.codechef.com/users/harshitha_b1",
  // Discord: "https://discord.com/channels/1348632761468194877/1348632761753276472",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
  emoji("⚡ Solve Data Structures and Algorithms problems using Java"),
  emoji("⚡ Build responsive web applications using React"),
  emoji("⚡ Develop backend APIs using Spring Boot"),
  emoji("⚡ Build AI-powered applications using LLMs and RAG")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "DSA",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "OOPS",
      fontAwesomeClassname: "fab fa-npm"
    },
   
  
  
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    { 
      schoolName: "Vasant Vally High School",
      logo: require("./assets/images/vasant_valley_logo.png"),
      subHeader: "Secondary Education",
      passingyear: "2021",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
   {
  schoolName: "Vasant Vally High School",
  logo: require("./assets/images/vasant_valley_logo.png"),
  subHeader: "Secondary Education",
  duration: "2021",
  desc: "Completed secondary education with a strong academic foundation.",
  descBullets: [
    "Participated in academic and extracurricular activities",
    "Developed an interest in Computer Science"
  ]
}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Java & DSA",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (HTML, CSS, React)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend (Spring Boot, REST APIs)",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL & Databases",
      progressPercentage: "75%"
    },
    {
      Stack: "AI / RAG / Generative AI",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Pharma Distribution System Developer",
      company: "Academic Major Project",
      companylogo: require("./assets/images/facebookLogo.png"), // keep temporarily
      date: "2026 - Present",
      desc: "Developing PharmaBridge AI, an AI-powered pharmaceutical distribution platform.",
      descBullets: [
        "Medicine inventory management",
        "Prescription verification support",
        "Drug delivery tracking",
        "Distributor coordination dashboard"
      ] 
    },
    {
  role: "Java & Data Structures Training",
  company: "Smart Interviews",
  companylogo: require("./assets/images/SmartInterviews.png"), // replace later with Smart Interviews logo if you want
  date: "2025 - 2026",
  desc: "Completed intensive training in Data Structures, Algorithms, Problem Solving, and Competitive Programming.",
  descBullets: [
    "Practiced coding problems regularly",
    "Learned problem-solving techniques",
    "Improved algorithmic thinking",
    "Strengthened Java programming skills"
  ]
}
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "PharmaBridge AI",
      projectDesc:
        "AI-powered pharmaceutical distribution system designed to improve inventory visibility, prescription verification, medicine tracking, and distributor coordination.",
      footerLink: [
        {
          name: "GitHub",
          url: "url:https://github.com/harshitha1b"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Personal Portfolio",
      projectDesc:
        "A professional portfolio website showcasing my skills, projects, education, and achievements.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://github.com/harshitha1b"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to contact me for internships, projects, collaborations, or opportunities.",
  number: "+91-XXXXXXXXXX",
  email_address: "harshithaboggula9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
