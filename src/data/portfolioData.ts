import { ServiceItem, ProjectItem, BlogItem, TestimonialItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: "Amarnath Sujith",
  title: "Award-Winning Product Designer & UI/UX Specialist",
  tagline: "Award-Winning Product Designer",
  location: "United States (Available Worldwide)",
  email: "amarsujith9294@gmail.com",
  phone: "+1 (555) 389-4021",
  rating: "4.9 of 5",
  reviewsCount: "350+ Reviews from Valued Clients",
  yearsExperience: "10+",
  completedProjects: "140+",
  clientsServed: "85+",
  socials: {
    linkedin: "https://www.linkedin.com/in/amarnath-sujith",
    dribbble: "https://dribbble.com/amarnathsujith",
    instagram: "https://instagram.com/amarnath.designs",
    twitter: "https://twitter.com/amarnathsujith",
  },
  bio: "I am a Product Designer & UI/UX Specialist with over a decade of hands-on experience transforming complex multi-sided platforms into clean, human-centered digital experiences. My work sits at the intersection of business strategy, cognitive psychology, and pixel-precise design craft.",
};

export const STATS: StatItem[] = [
  { value: "10+", label: "Years Experience", subtext: "In Product & UI/UX Design" },
  { value: "140+", label: "Completed Projects", subtext: "Shipped to App Store & Web" },
  { value: "350+", label: "Client Reviews", subtext: "4.9/5 Average Rating" },
  { value: "$45M+", label: "Client Value Created", subtext: "In Series A/B & IPO Value" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    subtitle: "Human-centered interfaces crafted for frictionless user journeys",
    description: "End-to-end digital experience design that balances intuitive user workflows with measurable conversion metrics. From in-depth user interviews and behavioral journey mapping to accessible visual interfaces.",
    deliverables: [
      "User Persona & Empathy Maps",
      "Information Architecture (IA)",
      "High-Fidelity Component UI",
      "Design Specifications & Hand-off",
      "Usability Testing Reports"
    ],
    tools: ["Figma", "FigJam", "Maze", "UserTesting"],
    timeline: "3 - 5 Weeks",
    highlight: "Conversion Optimization & Friction Reduction"
  },
  {
    id: "web-design",
    number: "02",
    title: "Website Design",
    subtitle: "High-impact SaaS platforms, marketing sites & responsive web portals",
    description: "Responsive, editorial-grade web architectures engineered to captivate audiences and communicate product value instantly. Optimized for desktop, tablet, and mobile with fluid responsiveness.",
    deliverables: [
      "Responsive Layouts (Desktop, Tablet, Mobile)",
      "Interactive Web Prototypes",
      "Micro-interactions & Micro-animations",
      "SEO-conscious Typography & Asset Hierarchy",
      "Framer / Webflow ready assets"
    ],
    tools: ["Figma", "Framer", "Webflow", "Tailwind CSS"],
    timeline: "2 - 4 Weeks",
    highlight: "Core Web Vitals & Visual Storytelling"
  },
  {
    id: "mobile-app",
    number: "03",
    title: "Mobile App Design",
    subtitle: "Native iOS & Android applications with buttery smooth gestures",
    description: "Deep adherence to Apple Human Interface Guidelines and Google Material 3 standards. Designing tactile, gesture-driven mobile ecosystems that users love opening every day.",
    deliverables: [
      "iOS & Android Native Screen Sets",
      "Complex Navigation & Tab Bars",
      "Haptic & Motion Guidelines",
      "Dark / Light Mode Dynamic Theming",
      "App Store & Google Play Presentation Assets"
    ],
    tools: ["Figma", "Principle", "Protopie", "Xcode Preview"],
    timeline: "4 - 6 Weeks",
    highlight: "App Store Feature Readiness"
  },
  {
    id: "wireframing",
    number: "04",
    title: "Wireframing & Prototyping",
    subtitle: "Validating structural clarity before a single pixel of UI is painted",
    description: "Rapid iteration through low and mid-fidelity wireframes to validate product hypothesis quickly. Clickable realistic prototypes allow stakeholders and test users to experience workflows before engineering starts.",
    deliverables: [
      "Interactive Clickable Prototypes",
      "User Flow & Decision Trees",
      "Edge-case & Error State Documentation",
      "Rapid Conceptual Skeletons",
      "Stakeholder Alignment Workshops"
    ],
    tools: ["Figma", "Protopie", "Lottie", "Whimsical"],
    timeline: "1 - 3 Weeks",
    highlight: "De-risking Engineering Costs Early"
  },
  {
    id: "design-systems",
    number: "05",
    title: "Design Systems",
    subtitle: "Scalable component libraries and design tokens for growing teams",
    description: "Building resilient, multi-brand design systems that eliminate designer-developer friction. Fully tokenized color palettes, typography scales, spacing variables, and modular component kits in Figma.",
    deliverables: [
      "W3C Design Token Architectures",
      "Atomic Component Library (Buttons, Inputs, Modals)",
      "Auto-Layout & Variant Architecture in Figma",
      "Accessibility Standards Documentation (WCAG AAA)",
      "Zeroheight or Storybook Style Guides"
    ],
    tools: ["Figma", "Zeroheight", "Storybook", "GitHub"],
    timeline: "4 - 8 Weeks",
    highlight: "10x Developer Handoff Velocity"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "luxevault",
    title: "LuxeVault – Luxury Horology Marketplace",
    client: "LuxeVault Corp, New York",
    category: "E-commerce",
    year: "2025",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    description: "A digital flagship marketplace for verified ultra-luxury timepieces, featuring 3D product inspection and real-time escrow authentication.",
    impactMetric: "+148% Checkout Conversion",
    tags: ["E-commerce", "Luxury UI", "Figma", "Design System"],
    challenge: "High-value buyers felt hesitant purchasing $20k+ luxury watches online without tactile verification and clear provenance tracking.",
    solution: "Designed a high-touch editorial purchase journey with micro-video inspection, cryptographic provenance certificate cards, and an intuitive concierge chat checkout.",
    keyFeatures: [
      "Interactive 360 watch bezel and dial inspector",
      "Instant certificate of authenticity badge overlay",
      "Custom two-step VIP escrow payment checkout",
      "Bespoke dark-luxury typography and warm amber accents"
    ],
    liveUrl: "https://luxevault.example.com"
  },
  {
    id: "pulse-ai",
    title: "PulseAI – Biometric Health & Fitness Co-Pilot",
    client: "Pulse Technologies, San Francisco",
    category: "Mobile Apps",
    year: "2025",
    image: "https://images.unsplash.com/photo-1510519138161-58474ebf8463?auto=format&fit=crop&w=1200&q=80",
    description: "An iOS & Android biometric companion that turns complex HRV, sleep stages, and metabolic indicators into actionable daily recovery insights.",
    impactMetric: "4.9 ★ with 120k+ Downloads",
    tags: ["Mobile Apps", "iOS", "Data Viz", "AI Co-pilot"],
    challenge: "Most fitness apps overwhelmed users with raw medical graphs, causing anxiety rather than healthy lifestyle habits.",
    solution: "Engineered a minimalist 'Recovery Ring' dashboard that translates tens of biological sensor points into one unified daily readiness score with natural language prompts.",
    keyFeatures: [
      "Dynamic haptic circular recovery gauge",
      "AI nutrition and sleep schedule advisor",
      "Dark-mode OLED optimized palette to reduce melatonin disruption",
      "Smooth gesture-driven weekly trend swipe cards"
    ],
    liveUrl: "https://pulseai.example.com"
  },
  {
    id: "nexus-flow",
    title: "NexusFlow – Cloud Observability & DevOps Studio",
    client: "Nexus Infrastructure, Austin",
    category: "Fintech / SaaS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "A developer-first monitoring console consolidating Kubernetes clusters, latency telemetry, and automated rollback workflows.",
    impactMetric: "Reduced MTTR by 42%",
    tags: ["Fintech / SaaS", "Dashboard", "Complex Data", "B2B"],
    challenge: "DevOps engineers suffered from alert fatigue across disjointed terminal outputs and dense monitoring dashboards.",
    solution: "Created an information-dense yet visually restful command center with intelligent anomaly highlights and one-click incident triage.",
    keyFeatures: [
      "High-density canvas with custom canvas data-viz",
      "Keyboard shortcut command palette (Cmd+K navigation)",
      "Contextual incident blast radius preview",
      "Modular drag-and-drop dashboard widgets"
    ],
    liveUrl: "https://nexusflow.example.com"
  },
  {
    id: "alysian-living",
    title: "Alysian Living – Architectural Smart Home Ecosystem",
    client: "Alysian Systems, Seattle",
    category: "Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Editorial web experience and configuration tool for architects designing integrated solar, thermal, and ambient lighting smart residences.",
    impactMetric: "Won Awwwards Site of the Day",
    tags: ["Web Design", "Architecture", "Interactive 3D", "Editorial"],
    challenge: "Luxury residential clients found traditional smart home spec sheets dry and incomprehensible.",
    solution: "Crafted an immersive editorial storytelling site where visitors can interactively toggle room lighting, time-of-day solar shadows, and acoustic zones.",
    keyFeatures: [
      "Dynamic day-to-night lighting simulator",
      "Custom architectural typography and warm neutral palette",
      "Interactive energy savings calculation tool",
      "Mobile-friendly tactile slider controls"
    ],
    liveUrl: "https://alysian.example.com"
  },
  {
    id: "apex-pay",
    title: "ApexPay – Global Borderless Treasury & Payroll",
    client: "Apex Financial, London & Chicago",
    category: "Fintech / SaaS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-currency digital banking platform enabling international startups to pay remote teams in 60+ countries with near-instant FX settlement.",
    impactMetric: "$3.2B Processed Volume",
    tags: ["Fintech / SaaS", "Fintech", "Mobile & Web", "Global"],
    challenge: "Cross-border payroll is fraught with regulatory confusion, hidden banking markups, and stressful compliance paperwork.",
    solution: "Designed a clean, transparent payment dashboard featuring real-time FX fee breakdown cards and batch one-click contractor compensation.",
    keyFeatures: [
      "Live FX rate fluctuation timeline with smart alerts",
      "Batch payroll processing with approval hierarchies",
      "Biometric authorization for multi-million transfers",
      "Localized tax documentation preview for 40+ jurisdictions"
    ],
    liveUrl: "https://apexpay.example.com"
  },
  {
    id: "zeno-organics",
    title: "Zeno Botanicals – Direct-to-Consumer Wellness",
    client: "Zeno Wellness, Portland",
    category: "E-commerce",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    description: "Sustainable skincare e-commerce platform blending holistic herbal wellness with clinical dermatology transparency.",
    impactMetric: "+310% Recurring Subscriptions",
    tags: ["E-commerce", "Shopify Plus", "Branding", "Packaging UI"],
    challenge: "Brand suffered high bounce rates due to generic template aesthetics and lack of ingredient education.",
    solution: "Rebuilt the entire digital shopping experience with interactive skin type diagnostics, transparent botanical lab notes, and a 1-click subscription builder.",
    keyFeatures: [
      "Interactive 60-second skincare quiz with custom routine generator",
      "Visual ingredient breakdown accordion with dermatology citations",
      "Seamless sticky quick-add cart drawer with threshold rewards",
      "Earthy warm cream color harmony and high-contrast typography"
    ],
    liveUrl: "https://zeno.example.com"
  }
];

export const BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    title: "The Psychology of Friction: When Good UX Means Slowing Users Down",
    summary: "Why zero-friction isn't always the holy grail. How deliberate friction prevents disastrous user errors in fintech and medical interfaces.",
    readTime: "6 min read",
    date: "March 12, 2026",
    category: "UX Psychology",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    author: "Amarnath Sujith",
    content: [
      "For the past decade, product teams have worshipped at the altar of 'zero friction'. The conventional dogma said: eliminate every click, autocomplete every field, and let the user execute actions at lightning speed.",
      "However, in high-stakes environments—like transferring $50,000 across international borders, deploying production code, or administering healthcare dosages—speed can be the enemy of comprehension.",
      "Deliberate friction is the strategic insertion of cognitive speedbumps. When we force users to pause, verify, or physically swipe to confirm, we activate System 2 cognitive processing.",
      "In our redesign of ApexPay's multi-million transfer interface, introducing a required 2-second slide-to-authorize interaction dropped accidental wire submissions by 94% without hurting customer satisfaction scores.",
      "Great design isn't about making everything frictionless; it's about matching friction to the gravity of the decision being made."
    ]
  },
  {
    id: "blog-2",
    title: "Building Resilient Design Systems for Multi-Platform Scale in 2026",
    summary: "How modern design tokens bridge the chasm between Figma variants and native React/SwiftUI codebases seamlessly.",
    readTime: "8 min read",
    date: "February 24, 2026",
    category: "Design Systems",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    author: "Amarnath Sujith",
    content: [
      "A design system is not a static Figma UI kit. It is a live software infrastructure that bridges the semantic gap between product thinkers, designers, and software engineers.",
      "When we standardize W3C design tokens—abstracting colors, typographic scales, elevation, and layout paddings into platform-agnostic JSON—we unlock true automated synchronization across web and native mobile stacks.",
      "The primary failure point of design systems is not component fidelity, but governance and contributor empathy. If engineers find it easier to hardcode a hex value than import a token, the system has failed.",
      "By establishing strict naming tiers (Global -> Semantic -> Component specific) and baking automated accessibility linters into the design review CI/CD pipeline, enterprise design velocity increases up to 5x."
    ]
  },
  {
    id: "blog-3",
    title: "Designing AI Interfaces: Moving Past the Chatbot Paradigm",
    summary: "Why conversational chat bubbles are often a lazy UI pattern for generative AI, and what direct-manipulation co-pilots look like.",
    readTime: "5 min read",
    date: "January 18, 2026",
    category: "AI & Innovation",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: "Amarnath Sujith",
    content: [
      "When generative AI exploded, the industry defaulted to the ChatGPT text box. But text is an exceptionally narrow communication pipe for spatial, visual, and multi-variable problem solving.",
      "Users shouldn't have to become prompt engineers to receive great outcomes. The best AI interfaces are contextual, ambient, and direct-manipulation tools.",
      "In PulseAI, instead of asking users to chat with a health bot about their sleep, the interface observes biometric anomalies, surfaces an proactive hypothesis card, and allows users to tune variables with interactive sliders.",
      "The future of AI product design belongs to systems that preserve user agency, offer transparent audit trails, and present AI outputs as editable drafts rather than sacred truths."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Sarah Jenkins",
    role: "VP of Product",
    company: "LuxeVault International",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote: "Amarnath has an extraordinary ability to dissect chaotic business requirements and translate them into pure, intuitive visual poetry. Our luxury marketplace checkout conversion surged by 148% within 90 days of his redesign launch.",
    rating: 5,
    projectType: "E-Commerce & Design System"
  },
  {
    id: "test-2",
    clientName: "David Chen",
    role: "Co-Founder & CEO",
    company: "Pulse Technologies",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Working with Amarnath felt like having an in-house design co-founder. His obsession with micro-interactions, haptics, and typographic rhythm transformed PulseAI from an ordinary tracker into an Apple App of the Day honoree.",
    rating: 5,
    projectType: "Mobile App UI/UX (iOS & Android)"
  },
  {
    id: "test-3",
    clientName: "Elena Rostova",
    role: "Head of Infrastructure UX",
    company: "Nexus Cloud Systems",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "Designing for DevOps engineers is notoriously difficult—they hate fluff and demand raw data density. Amarnath created a telemetry command center that our users genuinely rave about. His work reduced critical incident MTTR by 42%.",
    rating: 5,
    projectType: "Enterprise SaaS & Data Viz"
  },
  {
    id: "test-4",
    clientName: "Marcus Vance",
    role: "Chief Marketing Officer",
    company: "Alysian Living",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Amarnath's design craft is rare. He combines the aesthetic taste of an art director with the rigorous precision of a product manager. Our website won Site of the Day, and inbound qualified leads increased three-fold.",
    rating: 5,
    projectType: "Web Experience & Interactive 3D"
  }
];

export const DESIGN_PHILOSOPHY = [
  {
    title: "Empathy Before Aesthetics",
    description: "Every visual flourish must serve a genuine user need. We listen deeply to edge-cases and user frustrations before crafting visual layers."
  },
  {
    title: "Radical Simplicity",
    description: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away without breaking utility."
  },
  {
    title: "Measurable Business Value",
    description: "Design is not decorative art. It is a strategic tool to drive conversion, reduce churn, accelerate retention, and build brand equity."
  }
];

export const SKILL_TAGS = [
  "UI/UX Design",
  "Design Systems",
  "Mobile App Design (iOS/Android)",
  "Information Architecture",
  "Figma & Tokens",
  "Rapid Prototyping",
  "Usability Testing",
  "User Research",
  "Micro-interactions",
  "Accessibility (WCAG AAA)",
  "Wireframing",
  "Design Sprints"
];
