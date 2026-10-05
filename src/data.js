// Edit this file to personalise the whole site.
export const profile = {
  name: 'Ann',
  role: 'BBIT student & full-stack developer',
  tagline:
    'I build practical web apps for Kenyan users, from property listings with M-Pesa payments to hotel guest services.',
  email: 'you@example.com',
  location: 'Kenya',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
}

export const about = [
  "I'm a Bachelor of Business Information Technology student who enjoys turning business problems into working software. I like projects where the code, the users and the money flow all have to make sense together.",
  "Beyond coursework I build full-stack web apps and explore hardware-adjacent programming. I'm currently learning Rust, working through exercises on ownership, iterators and Cargo workspaces.",
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML & CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT auth', 'M-Pesa Daraja'] },
  { group: 'Learning', items: ['Rust', 'Systems design', 'AI/ML theory'] },
]

export const projects = [
  {
    title: 'NyumbaHub',
    description:
      'A Kenya-focused property listing platform with secure sign-in and a featured-listing payment flow using M-Pesa STK Push.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'M-Pesa'],
    link: '#',
  },
  {
    title: 'KitoStay',
    description:
      'A hotel guest interaction platform where guests can request services and stay connected with staff during their visit.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'NestLink',
    description: 'An early rental marketplace prototype that shaped the ideas behind NyumbaHub.',
    tags: ['Prototype', 'Web'],
    link: '#',
  },
]

export const education = [
  {
    title: 'Bachelor of Business Information Technology (BBIT)',
    place: 'Your University, Kenya',
    period: '20XX – 20XX',
    note: 'Coursework in systems analysis, databases, programming and business applications of IT.',
  },
  {
    title: 'Rust programming workshop',
    place: 'Self-directed',
    period: 'Ongoing',
    note: 'Hands-on exercises in ownership, iterators and Cargo workspaces.',
  },
]
