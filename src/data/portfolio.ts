import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'Slavic Books for Kids',
    description: 'Educational platform offering curated Russian literature for children with subscription-based delivery.',
    image: '/screenshots/slavic_books.png',
    url: 'https://slavicbooksforkids.com',
    metrics: [
      { label: 'Subscriber Growth', value: '+120%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['Next.js', 'Stripe', 'Tailwind CSS']
  },
  {
    title: 'Sprynt',
    description: 'Modern task management platform with AI-powered productivity features.',
    image: '/screenshots/sprynt.png',
    url: 'https://sprynt.io',
    metrics: [
      { label: 'User Efficiency', value: '+75%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['React', 'Node.js', 'AI Integration']
  },
  {
    title: 'Claratti',
    description: 'Enterprise-grade cybersecurity solutions with real-time threat monitoring.',
    image: '/screenshots/claratti.png',
    url: 'https://claratti.com',
    metrics: [
      { label: 'Security Incidents', value: '-90%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['React', 'Security', 'Analytics']
  },
  {
    title: 'United Direct Lending',
    description: 'Streamlined mortgage and lending platform with AI-powered application processing.',
    image: '/screenshots/united_direct.png',
    url: 'https://uniteddirectlending.com',
    metrics: [
      { label: 'Application Time', value: '-65%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['React', 'Node.js', 'Financial API']
  },
  {
    title: 'Bonaventure',
    description: 'Advanced RF and microwave design simulation platform for engineering professionals.',
    image: '/screenshots/bonaventure.png',
    url: 'https://bonaventurem.com',
    metrics: [
      { label: 'Design Efficiency', value: '+80%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['React', 'WebGL', 'Engineering']
  }
];