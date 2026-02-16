export const personalInfo = {
  name: 'Zafer AYAN',
  title: 'Frontend Developer & React Native Developer',
  tagline: 'Building production-ready mobile & web apps',
  email: 'hello@zaferayan.dev',
  location: 'Remote / Worldwide',
  bio: `I'm a frontend developer with 5+ years of experience building production-ready applications. I specialize in React, TypeScript, and React Native/Expo, helping startups and companies ship products faster.

My focus is on creating seamless user experiences with clean, maintainable code. I bridge the gap between AI capabilities and frontend development, building intelligent applications that solve real problems.`,
  shortBio: 'Frontend developer specializing in React, TypeScript, and React Native. I help startups ship faster and teach developers to build production-ready apps.',
  github: 'https://github.com/zaferayan',
  linkedin: 'https://linkedin.com/in/zaferayan',
  twitter: 'https://twitter.com/zaferayan',
}

export const skills = {
  core: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React Native / Expo', level: 92 },
    { name: 'Next.js', level: 85 },
  ],
  frontend: [
    { name: 'CSS/Tailwind', level: 90 },
    { name: 'Framer Motion', level: 80 },
    { name: 'Three.js', level: 70 },
    { name: 'GSAP', level: 75 },
  ],
  ai: [
    { name: 'OpenAI API', level: 85 },
    { name: 'LangChain', level: 75 },
    { name: 'Prompt Engineering', level: 88 },
    { name: 'AI Integration', level: 82 },
  ],
  tools: ['Git', 'Docker', 'CI/CD', 'Vercel', 'Supabase', 'Firebase', 'PostgreSQL', 'MongoDB'],
}

export const services = [
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Production-ready React Native apps with Expo. From concept to App Store deployment.',
    icon: 'mobile',
    features: ['Cross-platform development', 'Native performance', 'Push notifications', 'Offline support'],
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description: 'Modern web apps with React, Next.js, and TypeScript. Fast, accessible, and scalable.',
    icon: 'web',
    features: ['Server-side rendering', 'SEO optimization', 'API integration', 'Performance optimization'],
  },
  {
    id: 'ai-integration',
    title: 'AI-Powered Applications',
    description: 'Integrate AI capabilities into your products. Chatbots, automation, and intelligent features.',
    icon: 'ai',
    features: ['OpenAI integration', 'Custom AI solutions', 'RAG implementations', 'AI agents'],
  },
  {
    id: 'mentorship',
    title: 'Mentorship & Training',
    description: 'One-on-one mentorship and team training to level up your development skills.',
    icon: 'education',
    features: ['Code reviews', 'Architecture guidance', 'Career mentoring', 'Technical workshops'],
  },
]

export const projects = [
  {
    id: 'project-1',
    title: 'AI Chat Platform',
    description: 'A full-stack AI chatbot platform with RAG capabilities, supporting multiple AI models and custom knowledge bases.',
    tech: ['React', 'TypeScript', 'OpenAI', 'Supabase', 'Tailwind'],
    image: '/projects/ai-chat.png',
    link: 'https://github.com/zaferayan/ai-chat',
    featured: true,
    category: 'AI',
  },
  {
    id: 'project-2',
    title: 'Expo Starter Kit',
    description: 'Production-ready React Native starter template with authentication, navigation, and state management pre-configured.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    image: '/projects/expo-starter.png',
    link: 'https://github.com/zaferayan/expo-starter',
    featured: true,
    category: 'Mobile',
  },
  {
    id: 'project-3',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and custom reporting.',
    tech: ['Next.js', 'D3.js', 'PostgreSQL', 'Prisma'],
    image: '/projects/analytics.png',
    link: 'https://github.com/zaferayan/analytics',
    featured: true,
    category: 'Web',
  },
  {
    id: 'project-4',
    title: 'Dev Tools CLI',
    description: 'Command-line tool for automating development workflows, project scaffolding, and code generation.',
    tech: ['Node.js', 'TypeScript', 'Commander'],
    image: '/projects/dev-tools.png',
    link: 'https://github.com/zaferayan/dev-tools',
    featured: false,
    category: 'Tools',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO at TechStartup',
    content: 'Zafer delivered our mobile app in record time. His expertise in React Native and attention to detail exceeded our expectations. The app has been running flawlessly since launch.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Senior Developer',
    content: 'Working with Zafer as a mentor transformed my career. His deep knowledge of React and modern frontend practices helped me land my dream job at a top tech company.',
    avatar: '/avatars/marcus.jpg',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Founder at AIStartup',
    content: 'Zafer integrated AI capabilities into our product seamlessly. His understanding of both frontend and AI made the entire process smooth and efficient.',
    avatar: '/avatars/elena.jpg',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Engineering Lead',
    content: 'Exceptional work on our web application. Clean code, great communication, and delivered on time. Highly recommend for any frontend project.',
    avatar: '/avatars/david.jpg',
  },
]

export const blogPosts = [
  {
    id: 'blog-1',
    title: 'Building AI-Powered Apps with React',
    excerpt: 'A comprehensive guide to integrating OpenAI into your React applications with best practices and real-world examples.',
    date: '2024-01-15',
    readTime: '8 min',
    tags: ['React', 'AI', 'Tutorial'],
  },
  {
    id: 'blog-2',
    title: 'Expo vs Bare React Native: Making the Choice',
    excerpt: 'Deep dive into when to use Expo and when to go bare. Trade-offs, use cases, and my recommendations after 3 years of experience.',
    date: '2024-01-08',
    readTime: '6 min',
    tags: ['React Native', 'Expo', 'Mobile'],
  },
  {
    id: 'blog-3',
    title: 'TypeScript Patterns for React Developers',
    excerpt: 'Advanced TypeScript patterns that will make your React code more maintainable and type-safe.',
    date: '2024-01-02',
    readTime: '10 min',
    tags: ['TypeScript', 'React', 'Best Practices'],
  },
]

export const trainingPrograms = [
  {
    id: 'mentorship',
    title: '1-on-1 Mentorship',
    description: 'Personalized mentorship sessions to accelerate your career. Get guidance on projects, career decisions, and technical challenges.',
    duration: 'Monthly',
    price: 'Custom',
    features: [
      'Weekly video calls',
      'Code reviews',
      'Career guidance',
      'Project feedback',
      'Unlimited async support',
    ],
    featured: true,
  },
  {
    id: 'bootcamp',
    title: 'React Native Bootcamp',
    description: 'Intensive 8-week program to take you from React developer to React Native expert.',
    duration: '8 weeks',
    price: '$1,499',
    features: [
      'Live sessions',
      'Hands-on projects',
      'Code reviews',
      'Certificate',
      'Job preparation',
    ],
    featured: false,
  },
  {
    id: 'workshop',
    title: 'AI Integration Workshop',
    description: '2-day intensive workshop on integrating AI into your applications.',
    duration: '2 days',
    price: '$499',
    features: [
      'Hands-on exercises',
      'Real projects',
      'Source code included',
      'Recording access',
      'Community access',
    ],
    featured: false,
  },
]

export const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Students Mentored', value: '100+' },
  { label: 'Happy Clients', value: '30+' },
]
