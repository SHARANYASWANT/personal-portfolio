import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import News from "../assets/projects/News.png";
import Forms from "../assets/projects/Forms.png";

export const HERO_CONTENT = `Hello! I’m Sharan Yaswant, a dedicated Full Stack Developer with a strong foundation in both front-end and back-end technologies. I am highly motivated to pursue a career as a Software Development Engineer (SDE). Currently pursuing my education at Chennai Institute of Technology, I have achieved a remarkable CGPA of 9.84, demonstrating my commitment to excellence and continuous learning. As a Full Stack Developer, I specialize in creating dynamic and responsive web applications. My proficiency in front-end technologies like React.js ensures that user interfaces are not only visually appealing but also highly functional and user-friendly. On the back-end, my expertise in languages like Nodejs, Nestjs, Expressjs and Django, combined with strong database management skills in MySQL, allows me to build robust and scalable server-side applications. My proficiency in programming languages like C++, Python, Java has boosted up my confidence in competetive programming.

With an expected graduation year of 2027, I am eager to leverage my education and skills to contribute meaningfully to innovative projects and collaborate with teams to solve complex technical challenges.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Web Developer Intern",
    company: "Octanet Services Pvt. Ltd.",
    description: `Created a responsive landing page using HTML, CSS, and JavaScript, and developed a dynamic to-do app using React.`,
    technologies: ["Javascript", "React.js", "CSS", "HTML"],
  },
  {
    year: "2024",
    role: "Fullstack Developer Intern",
    company: "Znyck Technologies Pvt. Ltd.",
    technologies: ["Nest.js", "Next.js"],
  }
];

export const PROJECTS = [
  {
    title: "Academia Forms",
    image: Forms,
    description:
      "AcademiaForms, an Educational Form Management System using React, Node.js, and MongoDB, enabling seamless form creation, submission, and review. Features include role-based access and real-time updates for enhanced interaction between students and teachers.",
    technologies: ["React", "Node", "MongoDB"],
  },
  {
    title: " News Blog Website",
    image: News,
    description: "Developed a News Blog website is a responsive platform built using React.js, Tailwind CSS, and Framer Motion, featuring smooth animations and a modern design to enhance user engagement and accessibility.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "AgriData Hub",
    image: project1,
    description:
      " AgriDataHub is a web-based platform aimed at assisting farmers with data-driven agricultural practices by leveraging meteorological data analysis and advanced technologies",
    technologies: ["flask", "pandas", "numpy", "sklearn", "html", "css", "embedded-c"],
  },
  {
    title: "To-Do App",
    image: project2,
    description:
      "Created a TO-DO app using React.js, featuring a modern and intuitive interface for managing tasks efficiently.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8903295484",
  email: "sharanyaswant.06@gmail.com",
  linked: "https://linkedin.com/in/sharan-yaswant-a%20668313290%20%7C",
  git: "https://github.com/SHARANYASWANT"
};
