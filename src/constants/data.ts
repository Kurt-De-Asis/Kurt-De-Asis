import { Project, SoftwareSkill, ToolGroup, Service, ExperienceItem, Education, Achievement, RemoteSetupCategory, Language, PersonalInfo, NavItem } from '@/types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Kurt Russel De Asis',
  title: 'Full-Stack Developer | Virtual Assistant',
  heroTagline: 'Full-Stack Developer & Executive Support Specialist',
  location: 'Santa Rosa, Laguna, Philippines',
  phone: '+639918690956',
  email: 'kurtrussel644@gmail.com',
  github: 'https://github.com/Kurt-De-Asis',
  linkedin: 'https://www.linkedin.com/in/de-asis-kurt-russel-dizon-258790343',
  facebook: 'https://www.facebook.com/profile.php?id=61574673279749',
  resumeUrl: '/De%20Asis%2C%20Kurt%20Russel%20Dizon%20-%20CV.pdf'
};

// Navigation Items
export const navigation: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
  { id: 'tools', label: 'Tools', href: '#tools' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// Services
export const services: Service[] = [
  {
    id: 'dev-web',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications from frontend interfaces to backend APIs and databases, tailored to your business needs.',
    category: 'development'
  },
  {
    id: 'dev-frontend',
    title: 'Frontend Development',
    description: 'Responsive, accessible, and performant user interfaces built with modern frameworks like React, Next.js, and Vue.',
    category: 'development'
  },
  {
    id: 'dev-backend',
    title: 'Backend Development',
    description: 'Reliable, scalable server-side logic, REST APIs, and business logic using Go, Node.js, Python, and PHP.',
    category: 'development'
  },
  {
    id: 'dev-database',
    title: 'Database Design',
    description: 'Well-structured schemas and efficient queries for MySQL, PostgreSQL, SQLite, and Firebase.',
    category: 'development'
  },
  {
    id: 'dev-api',
    title: 'API Integration',
    description: 'Connecting your systems with third-party services, payment gateways, and internal APIs smoothly.',
    category: 'development'
  },
  {
    id: 'dev-bugs',
    title: 'Bug Fixing & Debugging',
    description: 'Systematic identification and resolution of issues to improve reliability, performance, and user experience.',
    category: 'development'
  },
  {
    id: 'dev-maintenance',
    title: 'System Maintenance',
    description: 'Ongoing support, updates, and optimization to keep applications stable and secure over time.',
    category: 'development'
  },
  {
    id: 'dev-support',
    title: 'Technical Support',
    description: 'Practical troubleshooting and documentation to help you and your team use technology effectively.',
    category: 'development'
  },
  {
    id: 'va-email',
    title: 'Email Management',
    description: 'Inbox organization, prioritization, drafting, and timely responses to keep communications moving.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-calendar',
    title: 'Calendar Management',
    description: 'Scheduling meetings and appointments across time zones while minimizing conflicts.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-leads',
    title: 'Lead Generation',
    description: 'Online research and data entry to find and qualify prospects, keeping databases organized and accurate.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-research',
    title: 'Online Research',
    description: 'Structured research and documentation to support decisions, planning, and client communication.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-data',
    title: 'Data Entry & Organization',
    description: 'Accurate data handling, CRM updates, and digital file organization for cleaner workflows.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-admin',
    title: 'Administrative Support',
    description: 'General executive support including documentation, project coordination, and day-to-day task management.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-automation',
    title: 'Basic Automation',
    description: 'Simple workflows and automation to reduce repetitive manual work using tools like Zapier and Google Apps Script.',
    category: 'virtual-assistance'
  },
  {
    id: 'va-communication',
    title: 'Client Communication',
    description: 'Clear, professional follow-ups between clients, prospects, and stakeholders.',
    category: 'virtual-assistance'
  }
];

// Work Experience
export const experience: ExperienceItem[] = [
  {
    id: 'software-dev-freelance',
    role: 'Software Developer',
    company: 'Freelance',
    location: 'Santa Rosa, Laguna, Philippines',
    locationType: 'Remote',
    startDate: 'January 2023',
    endDate: 'Present',
    current: true,
    summary: 'Developing and delivering software and web applications for clients, students, and academic capstone projects — from requirement gathering through deployment and support.',
    responsibilities: [
      'Developed and delivered small- to large-scale software and web applications for clients and academic capstone projects.',
      'Built functional systems using Java, Python, PHP, HTML, CSS, and JavaScript tailored to project requirements.',
      'Gathered client requirements and translated them into technical solutions.',
      'Provided project documentation and clear technical explanations.',
      'Debugged and resolved application issues to improve reliability, performance, and user experience.',
      'Designed and implemented databases and table structures using MySQL.',
      'Conducted code reviews and applied clean-code practices.',
      'Created and executed unit tests to validate system functionality.'
    ]
  },
  {
    id: 'va-executive-support',
    role: 'Virtual Assistant / Executive Support Specialist',
    company: 'Freelance Clients',
    location: 'Remote',
    locationType: 'Remote',
    startDate: 'January 2026',
    endDate: 'June 2026',
    summary: 'Provided remote administrative and executive support to help clients stay organized, communicate effectively, and keep their workflows running smoothly.',
    responsibilities: [
      'Managed email inboxes and calendars, organizing tasks and appointments with minimal conflicts.',
      'Generated and qualified leads through online research and data entry while maintaining organized, accurate databases.',
      'Scheduled client meetings and coordinated communications across multiple time zones.',
      'Ensured timely follow-ups between clients, prospects, and stakeholders.',
      'Provided administrative and technical support that improved workflow efficiency and reduced repetitive manual work.',
      'Assisted with digital organization, documentation, scheduling, research, and general executive support.'
    ]
  },
  {
    id: 'web-dev-intern',
    role: 'Web Developer Intern',
    company: 'C-Choice Construction Supply',
    location: 'General Trias, Cavite',
    locationType: 'On-site',
    startDate: 'March 2026',
    endDate: 'June 2026',
    summary: 'Developed and maintained an e-commerce platform and supporting admin tools using modern Go web technologies.',
    responsibilities: [
      'Developed and maintained the e-commerce platform using Go, chi, templ, sqlc, SQLite, HTMX, and Tailwind CSS.',
      'Implemented inventory management including stock adjustments, filters, product views, and automatic stock reduction on orders.',
      'Built administrative tools including staff activity logs, filters, brand management, and product search.',
      'Refactored the shopping cart and checkout interface, fixing quantity controls and mobile layout issues.',
      'Integrated customer loyalty functionality including C-Points generation and redemption, and QR code generation.',
      'Added customer verification using OTP email and audit logging / report export functionality.',
      'Resolved 20+ bugs involving inventory, image uploads, cart functionality, promotions, and authentication.',
      'Improved code quality using static analysis, go vet, nilaway, standardized enums, better error handling, and service-layer refactoring.'
    ]
  },
  {
    id: 'customer-care',
    role: 'Customer Care Representative',
    company: 'T-Mobile / iQor',
    location: 'Santa Rosa, Laguna',
    locationType: 'On-site',
    startDate: 'June 2026',
    endDate: 'August 2026',
    summary: 'Delivered professional customer support in a fast-paced environment, strengthening communication, troubleshooting, and problem-solving skills.',
    responsibilities: [
      'Assisted customers with billing, account, payment, plan, and service-related concerns through inbound calls.',
      'Used multiple customer support systems to review account information, process requests, and document interactions accurately.',
      'Followed security, quality, and customer service procedures consistently.',
      'Maintained professional and clear communication with customers.'
    ]
  }
];

// Developer Technical Skills
export const softwareSkills: SoftwareSkill[] = [
  // Programming Languages
  { id: 'lang-go', name: 'Go', category: 'Programming Languages' },
  { id: 'lang-python', name: 'Python', category: 'Programming Languages' },
  { id: 'lang-js', name: 'JavaScript', category: 'Programming Languages' },
  { id: 'lang-ts', name: 'TypeScript', category: 'Programming Languages' },
  { id: 'lang-php', name: 'PHP', category: 'Programming Languages' },
  { id: 'lang-java', name: 'Java', category: 'Programming Languages' },

  // Frontend
  { id: 'fe-html', name: 'HTML5', category: 'Frontend / Web' },
  { id: 'fe-css', name: 'CSS3', category: 'Frontend / Web' },
  { id: 'fe-react', name: 'React', category: 'Frontend / Web' },
  { id: 'fe-next', name: 'Next.js', category: 'Frontend / Web' },
  { id: 'fe-vue', name: 'Vue.js', category: 'Frontend / Web' },
  { id: 'fe-htmx', name: 'HTMX', category: 'Frontend / Web' },
  { id: 'fe-tailwind', name: 'Tailwind CSS', category: 'Frontend / Web' },

  // Backend
  { id: 'be-node', name: 'Node.js', category: 'Backend' },
  { id: 'be-express', name: 'Express', category: 'Backend' },
  { id: 'be-django', name: 'Django', category: 'Backend' },
  { id: 'be-go', name: 'Go', category: 'Backend' },
  { id: 'be-php', name: 'PHP', category: 'Backend' },
  { id: 'be-rest', name: 'REST APIs', category: 'Backend' },

  // Databases
  { id: 'db-postgres', name: 'PostgreSQL', category: 'Databases' },
  { id: 'db-mysql', name: 'MySQL', category: 'Databases' },
  { id: 'db-sqlite', name: 'SQLite', category: 'Databases' },
  { id: 'db-firebase', name: 'Firebase', category: 'Databases' },
  { id: 'db-sql', name: 'SQL', category: 'Databases' },

  // Dev tools
  { id: 'tool-git', name: 'Git', category: 'Development Tools' },
  { id: 'tool-github', name: 'GitHub', category: 'Development Tools' },
  { id: 'tool-docker', name: 'Docker', category: 'Development Tools' },
  { id: 'tool-vite', name: 'Vite', category: 'Development Tools' },
  { id: 'tool-wsl', name: 'WSL', category: 'Development Tools' },
  { id: 'tool-linux', name: 'Linux', category: 'Development Tools' },

  // Dev skills
  { id: 'skill-dbdesign', name: 'Database Design', category: 'Development Skills' },
  { id: 'skill-auth', name: 'Authentication & Authorization', category: 'Development Skills' },
  { id: 'skill-api', name: 'API Integration', category: 'Development Skills' },
  { id: 'skill-testing', name: 'Testing', category: 'Development Skills' },
  { id: 'skill-debugging', name: 'Debugging', category: 'Development Skills' },
  { id: 'skill-sysint', name: 'System Integration', category: 'Development Skills' }
];

// Virtual Assistant / Business Tools
export const vaTools: ToolGroup[] = [
  {
    id: 'va-productivity',
    group: 'Productivity & Administration',
    items: ['Google Workspace', 'Google Docs', 'Google Sheets', 'Google Drive', 'Google Calendar', 'Microsoft 365']
  },
  {
    id: 'va-communication',
    group: 'Communication & Scheduling',
    items: ['Slack', 'Zoom', 'Google Meet', 'Calendly']
  },
  {
    id: 'va-crm',
    group: 'CRM & Marketing',
    items: ['Basic CRM Management', 'Lead Generation Tools', 'Prospect Research', 'Data Entry', 'Lead Qualification']
  },
  {
    id: 'va-aiautomation',
    group: 'AI & Automation',
    items: ['ChatGPT', 'Grammarly', 'Zapier', 'Make.com', 'Google Apps Script']
  },
  {
    id: 'va-design',
    group: 'Design & Content',
    items: ['Canva', 'CapCut', 'Figma (Basic)']
  },
  {
    id: 'va-project',
    group: 'Project Management',
    items: ['Asana', 'Trello', 'ClickUp', 'Monday.com']
  }
];

// Remote Work Setup
export const remoteSetup: RemoteSetupCategory[] = [
  {
    id: 'remote-internet',
    title: 'Internet',
    items: [
      { label: 'Primary', value: 'Royal Cable Fiber MAXX — 500 Mbps' },
      { label: 'Backup', value: 'DITO 5G Mobile Hotspot' }
    ]
  },
  {
    id: 'remote-power',
    title: 'Power',
    items: [
      { label: 'Backup', value: 'APC UPS 1100VA — approx. 3-hour backup' },
      { label: 'Generator', value: 'Access available in building' }
    ]
  },
  {
    id: 'remote-equipment',
    title: 'Equipment',
    items: [
      { label: 'Laptop', value: 'Lenovo ThinkPad T14' },
      { label: 'Audio', value: 'Noise-cancelling headset' },
      { label: 'Video', value: 'HD webcam' }
    ]
  },
  {
    id: 'remote-workspace',
    title: 'Workspace',
    items: [
      { label: 'Environment', value: 'Dedicated home office, quiet environment' },
      { label: 'Background', value: 'Professional video-call background' }
    ]
  },
  {
    id: 'remote-availability',
    title: 'Availability',
    items: [
      { label: 'Commitment', value: 'Full-time availability' },
      { label: 'Time zones', value: 'Flexible across US EST, US PST, UK GMT, Australia AEST' }
    ]
  }
];

// Languages
export const languages: Language[] = [
  { id: 'lang-english', name: 'English', level: 'Fluent' },
  { id: 'lang-filipino', name: 'Filipino', level: 'Native' }
];

// Projects
export const projects: Project[] = [
  {
    id: 'clinic-management-system',
    title: 'Integrated Smart Clinic Management System',
    client: 'Souvari Skin Lab',
    featured: true,
    problemSolution: 'An aesthetic clinic needed a unified system to handle appointments, inventory, memberships, and analytics. This full-stack solution streamlines daily clinic operations while providing admins with clear, data-driven insights.',
    description: 'A full-stack clinic management and appointment booking system designed for an aesthetic clinic. It manages appointments, services, memberships, inventory, notifications, analytics, and customer communication.',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'MySQL', 'Tailwind CSS', 'Vite', 'Chart.js', 'Zod', 'JWT', 'OpenAI API', 'Vitest', 'React Router', 'React Hook Form', 'bcryptjs', 'Winston', 'Lucide React'],
    keyFeatures: [
      'Online appointment scheduling',
      'Service and membership management',
      'Inventory management with automatic product deduction based on treatments',
      'Customer notifications and descriptive analytics',
      'AI-powered chatbot and service recommendations based on skin concerns',
      'Administrative management dashboard'
    ],
    githubUrl: 'https://github.com/Kurt-De-Asis/Clinic-Management-System',
    category: 'Full Stack'
  },
  {
    id: 'e-library',
    title: 'E-Library — San Roque Elementary School',
    featured: true,
    problemSolution: 'Young students needed a simple, accessible digital library. This platform delivers a book collection over mobile and web with database-backed content and straightforward deployment.',
    description: 'Digital library platform with mobile and web interfaces for elementary students.',
    technologies: ['PHP', 'JavaScript', 'CSS', 'Docker'],
    keyFeatures: [
      'Digital book library',
      'Mobile and web interfaces',
      'Database-backed content',
      'Docker deployment',
      'Railway / Render configuration'
    ],
    githubUrl: 'https://github.com/Kurt-De-Asis/E-Library---San-Roque-Elementary-School',
    category: 'Full Stack'
  },
  {
    id: 'alumnet',
    title: 'ALUMNET — Alumni Networking Portal',
    featured: true,
    problemSolution: 'A commissioned capstone for an educational institution to connect alumni, manage events, and run a job board in a single network.',
    description: 'Commissioned capstone system for Laguna Science & Technology College — a portal for alumni networking, events, and jobs.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      'User authentication',
      'Alumni profiles',
      'Event management',
      'Job board',
      'Private messaging and social media functionality',
      'Administrative dashboard'
    ],
    githubUrl: 'https://github.com/Kurt-De-Asis/ALUMNET---CAPSTONE-COMMISSION',
    category: 'Full Stack'
  },
  {
    id: 'emotion-music-player',
    title: 'Voice-Activated Music Player with Emotion Detection',
    featured: true,
    problemSolution: 'A convenient way to pick the right music — this system reads facial emotions from a webcam and automatically selects music to match the detected mood, with voice control.',
    description: 'Web-based system that detects facial emotions through webcam input and automatically selects music based on the detected mood.',
    technologies: ['Python', 'Flask', 'PHP', 'JavaScript', 'MediaPipe', 'FER', 'MySQL'],
    keyFeatures: [
      'Facial emotion detection',
      'Webcam processing and MediaPipe integration',
      'FER emotion classification',
      'Automatic music selection',
      'Voice commands through the Web Speech API',
      'Admin dashboard'
    ],
    githubUrl: 'https://github.com/Kurt-De-Asis/Emotion-Music-Player',
    category: 'Full Stack'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    featured: true,
    problemSolution: 'A professional, recruiter-friendly personal site that presents both software development and virtual assistance capabilities.',
    description: 'Personal portfolio developed with a modern stack and clean architecture.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    keyFeatures: [
      'App Router architecture',
      'Responsive interface',
      'Light / dark mode',
      'Smooth animations',
      'SEO optimization',
      'Secure contact API'
    ],
    githubUrl: 'https://github.com/Kurt-De-Asis/Portfolio',
    category: 'Full Stack'
  },
  {
    id: 'go-banking-system',
    title: 'GO Banking System',
    featured: true,
    problemSolution: 'A lightweight command-line banking application demonstrating clean Go fundamentals and local data persistence.',
    description: 'Simple command-line banking application written in Go with JSON-based account storage.',
    technologies: ['Go'],
    githubUrl: 'https://github.com/Kurt-De-Asis/GO-Banking-System',
    category: 'Backend'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'A Python-based conversational chatbot application.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/Kurt-De-Asis/AI-Chatbot',
    category: 'Backend'
  },
  {
    id: 'pos-java',
    title: 'POS System',
    description: 'Mini point-of-sale system built with Java.',
    technologies: ['Java'],
    githubUrl: 'https://github.com/Kurt-De-Asis/POS-using-java',
    category: 'Desktop'
  },
  {
    id: 'atm-sql',
    title: 'ATM with SQL Database',
    description: 'An ATM application with a database built using Python and SQL.',
    technologies: ['Python', 'SQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/ATM-WITH-SQL-DATABASE',
    category: 'Backend'
  },
  {
    id: 'virtual-assistant-python',
    title: 'Virtual Assistant (Python)',
    description: 'A Python-based virtual assistant application.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/Kurt-De-Asis/Virtual-Assistant-Python',
    category: 'Backend'
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    description: 'An e-commerce website built with core web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Kurt-De-Asis/Web-Project',
    category: 'Frontend'
  },
  {
    id: 'school-management-system',
    title: 'School Management System',
    description: 'A system for managing school operations and records.',
    technologies: ['PHP', 'MySQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/School-Management-System',
    category: 'Full Stack'
  },
  {
    id: 'slac-student-portal',
    title: 'SLAC Student Portal',
    description: 'A student portal platform for school services.',
    technologies: ['PHP', 'MySQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/SLAC-Student-Portal',
    category: 'Full Stack'
  },
  {
    id: 'eccd-checklist',
    title: 'ECCD Checklist System',
    description: 'A system for early childhood care and development checklists.',
    technologies: ['PHP', 'MySQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/ECCD_Checklist',
    category: 'Full Stack'
  },
  {
    id: 'database-projects',
    title: 'Database Projects',
    description: 'A collection of database projects and exercises.',
    technologies: ['SQL', 'MySQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/DATABASE-PROJECT',
    category: 'Backend'
  }
];

// Education
export const education: Education[] = [
  {
    id: 'bs-it',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Saint Louis Anne Colleges of San Pedro Laguna Inc.',
    location: 'San Pedro, Philippines',
    startDate: '2022',
    endDate: '2026',
    status: 'Graduate of Bachelor of Science in Information Technology',
    description: 'Bachelor\'s degree in Information Technology focused on software development, database management, and system analysis.',
    achievements: [
      'Best Programmer',
      'Best in Capstone and Project Research',
      'Computer Studies President — National Service Training Program, 2022–2023',
      'Maintained approximately 1.50 minimum academic average from 1st year through 4th year',
      'Top 1 Most Outstanding Student — 2nd Semester 2023',
      'Community Leadership Awardee — 2nd Semester 2023',
      'Rites Coordination Awardee — 2nd Semester 2023'
    ]
  },
  {
    id: 'shs',
    degree: 'Senior High School',
    institution: 'Labas Senior High School',
    location: 'Labas, Philippines',
    startDate: '2020',
    endDate: '2022',
    status: 'Graduated with Honors',
    description: 'Graduated with Honors, building a strong academic foundation.',
    achievements: ['Graduated with Honors']
  }
];

// Achievements
export const achievements: Achievement[] = [
  {
    id: 'best-programmer',
    title: 'Best Programmer',
    description: 'Recognized as Best Programmer for outstanding software development work.',
    date: '2022-2026',
    category: 'Academic'
  },
  {
    id: 'best-capstone',
    title: 'Best in Capstone and Project Research',
    description: 'Awarded for excellence in capstone and project research.',
    date: '2022-2026',
    category: 'Academic'
  },
  {
    id: 'president',
    title: 'Computer Studies President, NSTP',
    description: 'Led the Computer Studies department in National Service Training Program activities and community service initiatives.',
    date: '2022-2023',
    category: 'Leadership'
  },
  {
    id: 'academic-average',
    title: 'Top Academic Standing',
    description: 'Maintained approximately a 1.50 minimum academic average from 1st year through 4th year.',
    date: '2022-2026',
    category: 'Academic'
  },
  {
    id: 'outstanding-student',
    title: 'Top 1 Most Outstanding Student',
    description: 'Awarded for exceptional academic performance and leadership qualities.',
    date: '2nd Semester 2023',
    category: 'Recognition'
  },
  {
    id: 'community-leadership',
    title: 'Community Leadership Awardee',
    description: 'Recognized for outstanding leadership and community service contributions.',
    date: '2nd Semester 2023',
    category: 'Leadership'
  },
  {
    id: 'rites-coordination',
    title: 'Rites Coordination Awardee',
    description: 'Awarded for exceptional coordination and organization of rites and ceremonies.',
    date: '2nd Semester 2023',
    category: 'Recognition'
  },
  {
    id: 'shs-honors',
    title: 'Senior High School — Graduated with Honors',
    description: 'Graduated with Honors from Labas Senior High School.',
    date: '2022',
    category: 'Academic'
  }
];

// Professional Summary
export const professionalSummary = `
Software Developer and Full-Stack Developer with 3+ years of experience developing web applications and software solutions for freelance, academic, and business projects. Experienced in frontend and backend development, database management, API integration, testing, debugging, deployment, and system maintenance.

Additionally experienced in remote Virtual Assistant and Executive Support work — including email management, calendar management, lead generation, data organization, meeting scheduling, client communication, and workflow support.

I combine technical development expertise with organization, communication, and remote-work capabilities to deliver reliable digital solutions while helping businesses stay organized, productive, and supported.
`;

// Social Links
export const socialLinks = {
  github: 'https://github.com/Kurt-De-Asis',
  linkedin: 'https://www.linkedin.com/in/de-asis-kurt-russel-dizon-258790343',
  facebook: 'https://www.facebook.com/profile.php?id=61574673279749',
  email: 'kurtrussel644@gmail.com',
  phone: '+639918690956'
};