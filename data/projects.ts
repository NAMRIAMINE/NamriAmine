// app/data/projects.ts
import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'dr-turbine',
    title: 'Dr Turbine',
    year: '2025',
    description:
      'Advanced drone-based platform for wind turbine blade inspection using computer vision and machine learning for predictive maintenance optimization.',
    tech: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Node.js',
      'MySQL',
      'Shadcn UI',
      'Zustand',
      'TanStack Query',
      'Socket.IO',
      'Framer Motion',
    ],
    features: [
      'AI Damage Detection',
      'Side-by-Side Comparison',
      'Annotation Tools',
      'Progress Tracking',
    ],
    status: 'In Development',
    gradient: 'from-purple-500 to-pink-500',
    category: 'Industrial Tech',
    image: '/dr-turbine.png',
  },
  {
    id: 'filahi',
    title: 'Filahi WebApp',
    year: '2023',
    description:
      'Comprehensive precision-agriculture platform combining drone intelligence, satellite observation, and AI-powered analytics with real-time insights.',
    tech: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Django',
      'MySQL',
      'Leaflet.js',
      'Prisma',
      'Auth.js',
      'TailwindCSS',
    ],
    features: ['Interactive Mapping', 'AI Crop Analysis', 'Real-time Alerts', 'PDF/CSV Reports'],
    status: 'Production',
    gradient: 'from-green-500 to-blue-500',
    category: 'Agriculture Tech',
    image: '/filahi.png',
  },
  {
    id: 'dr-stone',
    title: 'Dr Stone Platform',
    year: '2022-Present',
    description:
      'Web solutions for agricultural analysis with custom integrations, API connectivity, and dynamic data visualization.',
    tech: ['JavaScript', 'jQuery', 'Wix Platform', 'REST APIs', 'HTML5', 'CSS3'],
    features: ['Custom Integrations', 'API Connectivity', 'Data Visualization', 'User Management'],
    status: 'Live',
    gradient: 'from-orange-500 to-red-500',
    category: 'Web Platform',
    image: '/drstone.png',
  },
]
