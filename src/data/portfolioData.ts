import { ServiceItem, ProjectItem, BlogItem, TestimonialItem, StatItem, EducationItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Amarnath Sujith",
  title: "AI Data Analyst & Software Developer",
  tagline: "AI Data Analyst & CS Engineer",
  location: "Trivandrum, Kerala, India",
  email: "amarsujith9294@gmail.com",
  phone: "9061360241",
  rating: "7.4 CGPA",
  reviewsCount: "B.Tech Computer Science & Engineering @ UCEK",
  yearsExperience: "2023-2027",
  completedProjects: "4+ Major Projects",
  clientsServed: "4 Leadership Roles",
  socials: {
    linkedin: "https://www.linkedin.com/in/amarnath-sujith",
    github: "https://github.com/amarnathsujith",
    instagram: "https://instagram.com/amarnath.sujith",
    twitter: "https://twitter.com/amarnathsujith",
  },
  bio: "AI Data Analyst with strong analytical, technical, and leadership capabilities. Skilled in Python, SQL, Power BI, and machine learning for data modelling, reporting, and predictive analytics. Experienced in dashboard development, statistical analysis, and data pipeline creation to support data-driven decision-making. Proven ability to lead technical communities, coordinate large-scale programs, and mentor students in data and AI technologies.",
};

export const STATS: StatItem[] = [
  { value: "7.4", label: "CGPA in B.Tech CSE", subtext: "University College of Engineering, Kariavattom" },
  { value: "4+", label: "Featured ML & AI Projects", subtext: "Impulse, Demand Forecasting, Insurance ML, SafeSchools" },
  { value: "4", label: "Leadership Roles", subtext: "Unstop Igniters, Legacy IEDC, MuLearn, IEEE" },
  { value: "Intern", label: "Software Developer", subtext: "DCube AI Solutions, Technopark (2026)" },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "University College of Engineering, Kariavattom (UCEK)",
    period: "2023 – 2027 (Expected)",
    score: "CGPA: 7.4",
    details: "Focus on AI, Data Science, Machine Learning, and Web Technologies."
  },
  {
    degree: "Class 12 (Science)",
    institution: "Kuriakose Elias English Medium School",
    period: "2023",
    score: "88%",
    details: "Higher Secondary Education with Science specialization."
  },
  {
    degree: "Class 10",
    institution: "Loyola School, Trivandrum",
    period: "2021",
    score: "94%",
    details: "Secondary School Certificate."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    organization: "DCube AI Solutions, Technopark",
    period: "2026",
    type: "Internship",
    description: [
      "Contributed to frontend and backend development across the software development lifecycle, including feature development, debugging, and deployment preparation.",
      "Worked on requirements, design, implementation, and maintainable software solutions in a professional development environment."
    ]
  },
  {
    role: "President",
    organization: "Unstop Igniters UCEK",
    period: "2025 - 2027",
    type: "Leadership",
    description: [
      "Leading technical community initiatives, hackathons, and competitive programming events for college students.",
      "Promoting skill development and platform opportunities across campus."
    ]
  },
  {
    role: "Ex Chief Executive Officer",
    organization: "Legacy IEDC UCEK",
    period: "2026",
    type: "Leadership",
    description: [
      "Head of Innovation and Entrepreneurship Development Centre (IEDC) at UCEK.",
      "Organized ideation workshops, startup incubation programs, and tech innovation drives."
    ]
  },
  {
    role: "Ex Campus Lead",
    organization: "MuLearn UCEK",
    period: "2024 - 2025",
    type: "Leadership",
    description: [
      "Spearheaded GTech MuLearn peer-learning culture and skill enablement across engineering branches.",
      "Mentored students in web development, data science, and AI fundamentals."
    ]
  },
  {
    role: "Ex Technical Co Lead",
    organization: "IEEE SBC UCEK",
    period: "2023 - 2024",
    type: "Leadership",
    description: [
      "Co-led technical workshops, coding bootcamps, and IEEE Student Branch events.",
      "Fostered collaborative engineering projects and technical skill building."
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-ml",
    number: "01",
    title: "Data Science & Machine Learning",
    subtitle: "Predictive analytics, data modeling, and statistical analysis",
    description: "End-to-end data processing pipelines using Pandas, NumPy, Scikit-learn, TensorFlow, XGBoost, and LightGBM. Specializing in exploratory data analysis (EDA), predictive analytics, and model evaluation metrics (R², MAE, RMSE).",
    deliverables: [
      "Predictive Machine Learning Models",
      "Exploratory Data Analysis (EDA) Reports",
      "Feature Engineering & Selection Architectures",
      "Model Performance Evaluation (MAE, RMSE, R²)",
      "Classification & Regression Pipelines"
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "XGBoost", "TensorFlow"],
    timeline: "ML & Data Science",
    highlight: "Model Accuracy & Statistical Rigor"
  },
  {
    id: "web-dev",
    number: "02",
    title: "Full-Stack Web & AI Applications",
    subtitle: "Modern web platforms powered by React, Next.js, and Flask/Django",
    description: "Building responsive, high-performance web applications integrated with AI features, real-time databases (PostgreSQL, Supabase, MySQL), and intuitive user interfaces.",
    deliverables: [
      "Next.js & React.js Web Applications",
      "AI Feature Integration (Resume Builder, JD Matching)",
      "Flask & Django REST APIs",
      "PostgreSQL & Supabase Schemas",
      "Responsive UI & Role-Based Access Control"
    ],
    tools: ["Next.js", "React.js", "Flask", "Django", "PostgreSQL", "Supabase", "JavaScript"],
    timeline: "Web & AI Apps",
    highlight: "AI-Powered User Experiences"
  },
  {
    id: "data-viz",
    number: "03",
    title: "Data Visualization & BI Dashboards",
    subtitle: "Turning complex datasets into actionable visual insights",
    description: "Designing interactive business intelligence dashboards and reporting systems using Power BI, Tableau, Matplotlib, and Excel for data-driven decision making.",
    deliverables: [
      "Power BI & Tableau Interactive Dashboards",
      "Automated SQL Data Queries & Reporting",
      "Executive KPI Tracking & Visualizations",
      "Exploratory Data Plots & Matplotlib Analysis",
      "Clean Financial & Operational Models"
    ],
    tools: ["Power BI", "Tableau", "Excel", "Matplotlib", "SQL", "pgAdmin"],
    timeline: "Data Viz & BI",
    highlight: "Data-Driven Decision Making"
  },
  {
    id: "gen-ai",
    number: "04",
    title: "Generative AI & AI Agents",
    subtitle: "Computer vision, CNNs, AI agents, and AutoML solutions",
    description: "Leveraging cutting-edge AI techniques including Generative AI, Computer Vision, Convolutional Neural Networks, AI agents, and AutoML for intelligent automation.",
    deliverables: [
      "AI Resume Building & JD Matching Algorithms",
      "Computer Vision & CNN Architectures",
      "Autonomous AI Agent Workflows",
      "AutoML Pipeline Implementations",
      "2D Evacuation & Pathfinding Route Algorithms"
    ],
    tools: ["Generative AI", "Computer Vision", "CNNs", "AI Agents", "AutoML", "Python"],
    timeline: "Gen AI & Computer Vision",
    highlight: "Next-Gen AI Automation"
  },
  {
    id: "leadership",
    number: "05",
    title: "Technical Leadership & Mentorship",
    subtitle: "Community building, hackathons, and student tech mentoring",
    description: "Proven track record as President of Unstop Igniters UCEK, CEO of Legacy IEDC UCEK, Campus Lead for MuLearn, and Technical Co-Lead for IEEE SBC UCEK.",
    deliverables: [
      "Large-Scale Hackathons & Coding Competitions",
      "AI & Software Engineering Mentorship",
      "Technical Community Building & Outreach",
      "Startup Incubation & Ideation Workshops",
      "Cross-Functional Student Team Leadership"
    ],
    tools: ["Community Leadership", "Event Coordination", "Public Speaking", "Mentorship"],
    timeline: "Leadership & Community",
    highlight: "Empowering Technical Talent"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "impulse",
    title: "Impulse — Placement Preparation Platform",
    client: "UCEK Placement Cell Initiative",
    category: "Web & AI",
    year: "2025 - 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "Built a placement-preparation platform for UCEK students with AI-powered mentoring, learning roadmaps, assessments, and performance tracking.",
    impactMetric: "AI-Powered Mentoring & Practice",
    tags: ["Next.js", "Supabase", "Generative AI", "React"],
    challenge: "Engineering students lacked unified, AI-driven tools to customize their resumes according to specific Job Descriptions and practice for placement drives.",
    solution: "Engineered Impulse, a complete web platform integrating AI resume building, JD matching algorithms, company-specific mock interviews, and automated progress analytics.",
    keyFeatures: [
      "AI resume building and automatic Job Description (JD) matching",
      "Interactive AI-powered mock interview practice",
      "Company-specific assessment modules and roadmap tracking",
      "Supabase database integration with real-time student analytics"
    ],
    liveUrl: "https://impulse.uck.ac.in"
  },
  {
    id: "abc-foods",
    title: "ABC Foods — Demand Forecasting System",
    client: "Supply Chain & Retail Analytics",
    category: "Data Science & ML",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "Built an ML-based demand forecasting system using historical food sales data for predictive inventory planning.",
    impactMetric: "Achieved R² = 0.547 using LightGBM",
    tags: ["Python", "LightGBM", "PostgreSQL", "React"],
    challenge: "Food distribution enterprises faced stockout losses and overstock spoilage due to static historical inventory forecasting.",
    solution: "Developed a Machine Learning pipeline using LightGBM gradient boosting to model sales seasonality, evaluating accuracy via R², MAE, and RMSE metrics.",
    keyFeatures: [
      "LightGBM regression model trained on multi-period sales telemetry",
      "Rigorous evaluation using MAE, RMSE, and R² metrics (achieved R² = 0.547)",
      "PostgreSQL database integration for real-time inventory ingestion",
      "Interactive React dashboard for supply chain manager insights"
    ],
    liveUrl: "https://github.com/amarnathsujith"
  },
  {
    id: "insurance-cost",
    title: "Insurance Cost Prediction System",
    client: "Healthcare & Fintech Analytics",
    category: "Predictive Analytics",
    year: "2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description: "Developed an ML model to predict medical insurance charges based on demographic and lifestyle features.",
    impactMetric: "Evaluated 6 ML Algorithms",
    tags: ["Python", "Scikit-learn", "XGBoost", "Flask"],
    challenge: "Insurance underwriters needed automated, data-driven cost predictions derived from demographic and lifestyle variables.",
    solution: "Trained and benchmarked multiple regression algorithms (XGBoost, Random Forest, SVM, KNN, Gradient Boosting) to select the optimal predictive model.",
    keyFeatures: [
      "Feature engineering on age, BMI, smoking status, and regional demographics",
      "Benchmark analysis comparing XGBoost, Random Forest, SVM, and KNN",
      "Flask microservice backend serving real-time cost prediction APIs",
      "Exploratory Data Analysis (EDA) uncovering key premium cost drivers"
    ],
    liveUrl: "https://insureiq-app.onrender.com/"
  },
  {
    id: "safeschools",
    title: "SafeSchools — Emergency Evacuation Platform",
    client: "Campus Safety & Disaster Prep Initiative",
    category: "Full Stack",
    year: "2024",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    description: "Developed an interactive school emergency evacuation platform featuring role-based access control and 2D emergency mapping.",
    impactMetric: "Real-Time 2D Route Guidance",
    tags: ["React", "Python", "PostgreSQL", "Phaser"],
    challenge: "Complex campus layouts made standard printed evacuation diagrams ineffective during rapid emergency situations.",
    solution: "Built a web-based evacuation platform combining 2D interactive canvas mapping via Phaser with real-time pathfinding algorithms.",
    keyFeatures: [
      "2D campus map interactive simulation rendered with Phaser",
      "Automated shortest-path algorithm for hazard-avoiding evacuation routes",
      "Role-based access control (RBAC) for admins, teachers, and safety responders",
      "Python and PostgreSQL backend managing real-time building occupancy"
    ],
    liveUrl: "https://github.com/amarnathsujith"
  }
];

export const BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    title: "Optimizing Demand Forecasting with LightGBM & Time-Series Data",
    summary: "How gradient boosting machines outperform traditional statistical forecasting models in inventory prediction, achieving R² = 0.547 on real sales data.",
    readTime: "5 min read",
    date: "February 2026",
    category: "Machine Learning",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    author: "Amarnath Sujith",
    content: [
      "Demand forecasting in supply chain applications requires balancing model complexity with execution latency. During the development of the ABC Foods Demand Forecasting system, we evaluated multiple machine learning approaches.",
      "Traditional linear regression models struggled with nonlinear seasonal trends and categorical store features. By using LightGBM—a high-performance gradient boosting framework—we achieved an R² score of 0.547.",
      "Key takeaways include feature engineering around rolling mean sales, lag variables, and evaluating error strictly with MAE and RMSE metrics.",
      "Integrating LightGBM with a PostgreSQL database and React dashboard gave operators instant visibility into optimal inventory thresholds."
    ]
  },
  {
    id: "blog-2",
    title: "Building Impulse: AI-Powered Placement Prep for Engineering Students",
    summary: "A deep dive into how LLMs, Supabase, and Next.js can be combined to build tailored AI resume matching and interview preparation tools.",
    readTime: "6 min read",
    date: "January 2026",
    category: "Full Stack & AI",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    author: "Amarnath Sujith",
    content: [
      "Job seekers often apply with generic resumes that miss critical ATS keywords present in specific Job Descriptions.",
      "To solve this for UCEK engineering students, I built Impulse using Next.js, Supabase, and Generative AI APIs.",
      "The system parses user resume text against targeted JDs, highlighting missing skill gaps and generating tailored interview practice questions.",
      "Platform analytics show significant confidence boosts for students preparing for top-tier campus recruitment drives."
    ]
  },
  {
    id: "blog-3",
    title: "Interactive Evacuation Pathfinding using React, Python & Phaser",
    summary: "Combining game engine physics with dynamic graph pathfinding algorithms to guide emergency evacuations in real-time.",
    readTime: "4 min read",
    date: "December 2025",
    category: "Web Development",
    coverImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    author: "Amarnath Sujith",
    content: [
      "During campus emergencies, static floorplan exit signs often lead crowds toward blocked exits or bottlenecks.",
      "SafeSchools utilizes Phaser 2D canvas rendering to present an interactive, dynamic floor plan.",
      "By calculating pathfinding routes in Python and streaming updates to React frontend components, users receive instantaneous evacuation directions based on active hazard zones."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "DCube AI Solutions",
    role: "Engineering Supervisor",
    company: "DCube AI Solutions, Technopark",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Amarnath demonstrated exceptional technical aptitude during his Software Development Internship. His contributions across full-stack development, debugging, and deployment were clean, structured, and highly reliable.",
    rating: 5,
    projectType: "Software Development Internship"
  },
  {
    id: "test-2",
    clientName: "UCEK Student Placement Cell",
    role: "Placement Coordinator",
    company: "University College of Engineering, Kariavattom",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The Impulse platform developed by Amarnath has transformed how our students prepare for campus recruitment drives. The AI resume matching and interactive assessment tools are standout features.",
    rating: 5,
    projectType: "Impulse Web & AI Platform"
  },
  {
    id: "test-3",
    clientName: "Legacy IEDC & Unstop Igniters",
    role: "Faculty Advisor",
    company: "UCEK Innovation Council",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "Amarnath is a natural community leader. As President of Unstop Igniters and CEO of IEDC UCEK, he organized impactful hackathons, mentored hundreds of students, and fostered a strong innovation culture on campus.",
    rating: 5,
    projectType: "Technical Leadership & Community"
  }
];

export const DESIGN_PHILOSOPHY = [
  {
    title: "Data-Driven Precision",
    description: "Building machine learning models, statistical analyses, and data pipelines grounded in rigorous evaluation metrics like MAE, RMSE, and R²."
  },
  {
    title: "User-Centered AI Solutions",
    description: "Creating intelligent web applications (React, Next.js, Supabase) that translate complex AI algorithms into simple, intuitive user tools."
  },
  {
    title: "Impactful Technical Leadership",
    description: "Fostering peer-learning cultures, organizing hackathons, and mentoring tech talent as campus lead across Unstop, IEDC, MuLearn, and IEEE."
  }
];

export const SKILL_TAGS = [
  "Python",
  "SQL",
  "JavaScript",
  "C",
  "C++",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "XGBoost",
  "LightGBM",
  "Power BI",
  "Tableau",
  "Excel",
  "Matplotlib",
  "React.js",
  "Next.js",
  "Flask",
  "Django",
  "HTML/CSS",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Generative AI",
  "Computer Vision",
  "CNNs",
  "AI Agents",
  "AutoML",
  "Git & GitHub",
  "VS Code",
  "Google Colab",
  "pgAdmin"
];
